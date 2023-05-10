import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_API } from "../Config";
// import { toast } from "react-toastify";
import auth from "../firebaseCredential";
import useAdmin from "../hooks/useAdmin";
import Header from "../Pages/Shared/Header";
import PreLoader from "../Pages/Shared/PreLoader";
import Navber from "../Pages/Shared/Navber";

const Purchase = () => {
  const [user, isLoading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const { purchaseId } = useParams();
  const [items, setItems] = useState({});
  const [quantity, setQuantity] = useState(0);
  const Swal = require("sweetalert2");
  useEffect(() => {
    const url = `${BASE_API}/tools/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [purchaseId]);

  const { name, img, minOrder, dis, price, available } = items;

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { username, email, order, address, phone } = data;
    const total = price * parseFloat(order);
    const bookingInfo = {
      img: img,
      name: name,
      username: username,
      email: email,
      order: order,
      price: price,
      address: address,
      phone: phone,
      total: total,
    };
    fetch(`${BASE_API}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json)
      .then((result) => {
        if (result) {
          Swal.fire({
            title: "Buy Successfully",
            text: `Are You Want to See Your Order?`,
            showCloseButton: true,
            confirmButtonColor: "#3085d6",
            closeButtonColor: "red",
            confirmButtonText: "Yes",
            icon: "success",
            width: "25em",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(navigate("/dashboard/myOrder"));
            }
          });
        }
      });
  };

  const userQuantity = watch("order");
  const grandTotal = price * quantity;
  const minTotal = price * minOrder;

  useEffect(() => {
    setQuantity(userQuantity);
  }, [userQuantity]);

  if (isLoading) {
    return <PreLoader />;
  }
  return (
    <>
      <section className="order-section">
        <Navber color="#f5fdfd" />
        <div className="title">
          <h4>BOOK NOW</h4>
        </div>
        <div className="mx-auto container order-container">
          <div className="order-info-container">
            <div className="order-img-and-name">
              <img
                data-default-height="100"
                width="450"
                data-default-width="450"
                height="100"
                src={img}
                alt=""
              />
              <div>
                <h2 className="order-name">{name}</h2>
                <h1 className="order-price">Price: ${price}</h1>
                <div className="min-max">
                  <h2>Min Order:{minOrder}</h2>
                  <h2>Available:{available}</h2>
                </div>
              </div>
              <div className="order-info">
                <p>{dis}</p>
              </div>
            </div>
          </div>
          <div className="place-order-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="book-field">
                <input
                  value={user.displayName}
                  {...register("username", { required: true })}
                />
              </div>

              <div className="book-field">
                <input
                  value={user.email}
                  {...register("email", { required: true })}
                />
              </div>
              <div className="book-field">
                <input
                  className="w-full"
                  type="number"
                  placeholder="Your Contact Info"
                  {...register("phone", { required: true })}
                />
              </div>
              {errors.phone?.type === "required" && (
                <strong className="text-red-500 font-bold">
                  This Field Is Required 😒
                </strong>
              )}
              <div className="book-field ">
                <textarea
                  className="w-full h-20 outline-none border-0"
                  type="text"
                  placeholder="Your Address"
                  {...register("address", { required: true })}
                />
              </div>
              {errors.address?.type === "required" && (
                <strong className="text-red-500 font-bold">
                  This Field Is Required 😒
                </strong>
              )}
              <p className="font-bold">Enter Your Quantity</p>
              <div className="book-field">
                <input
                  className="w-full"
                  type="number"
                  defaultValue={minOrder}
                  {...register("order", {
                    required: true,
                    min: {
                      value: `${minOrder}`,
                    },
                    max: {
                      value: `${available}`,
                    },
                  })}
                />
              </div>
              {errors.order?.type === "required" && (
                <strong className="text-red-500 font-bold">
                  Value Is Required !
                </strong>
              )}
              {errors.order?.type === "min" && (
                <strong className="text-red-500 font-bold">
                  Plz Enter Minimum Order 😊
                </strong>
              )}

              {errors.order?.type === "max" && (
                <strong className="text-red-500 font-bold">
                  You Can't Buy More Than Available 😒
                </strong>
              )}
              {quantity ? (
                <p className="allTotal">
                  Total: Price * Quantity =
                  <span className="text-green-500">$</span>
                  {grandTotal}
                </p>
              ) : (
                <p className="allTotal">
                  Total: Price * Quantity ={" "}
                  <span className="text-green-500">$</span>
                  {minTotal}
                </p>
              )}

              {admin ? (
                <button
                  className="care-btn  bg-blue-900"
                  type="submit"
                  value="BUY"
                />
              ) : (
                <input
                  className="care-btn bg-blue-900"
                  type="submit"
                  value="BUY"
                />
              )}
            </form>
          </div>
        </div>
        {/* <PlaceOrder /> */}
      </section>
    </>
  );
};

export default Purchase;
