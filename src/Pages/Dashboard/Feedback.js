import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { BASE_API } from "../../Config";
import auth from "../../firebaseCredential";

const Feedback = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user] = useAuthState(auth)
  const onSubmit = (data) => {
    const { star, review } = data;
    const addReview = {
      img: user.photoURL,
      star: star,
      review: review,
      name: user.displayName,
    };

    fetch(`${BASE_API}/addReview`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json)
      .then((result) => {
        if (result) {
          toast.success("Thank You");
        }
      });
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mb-8">Give Us Your Feedback</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center">
          <textarea
            {...register("review", {
              required: {
                value: true,
              }
            })}
            className="c-info h-24  "
            placeholder="Your Message"
          ></textarea>
          <div className="my-3">
            <input
              className=" c-info "
              type="number"
              placeholder=" Your Retting within 1-5"
              {...register("star", {
                required: {
                  value: true,
                },
                max: {
                  value: 5,
                },
                min: {
                  value: 1,
                },
              })}
            />
          </div>


          {errors.star?.type === "min" && (
            <strong className="text-red-500 font-bold ">
              You Can Give Retting 1-5 😒
            </strong>
          )}
          {errors.star?.type === "max" && (
            <strong className="text-red-500 font-bold ">
              You Can Give Retting 1-5 😒
            </strong>
          )}

          {
            <input
              className="care-btn care-2  feedback mt-3"
              type="submit"
              value="done"
            />
          }
        </div>
      </form>
    </div>
  );
};

export default Feedback;
