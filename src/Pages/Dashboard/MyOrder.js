import { signOut } from "firebase/auth";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { BASE_API } from "../../Config";
import auth from "../../firebaseCredential";
import PreLoader from "../Shared/PreLoader";
const MyOrder = () => {
  const [bookings, setBookings] = useState([]);
  const [user, Loading] = useAuthState(auth);
  const navigate = useNavigate();
  const Swal = require("sweetalert2");
  useEffect(() => {
    if (user) {
      fetch(`${BASE_API}/myItems?userEmail=${user.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setBookings(data);
        });
    }
  }, [user, navigate]);

  // Cancle Order
  if (Loading) {
    return <PreLoader />;
  }
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      confirmButtonText: "Yes, delete it!",
      width: "400",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${BASE_API}/cancelOrder/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              const Toast = Swal.mixin({
                toast: true,
                position: "top-center",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              });

              Toast.fire({
                icon: "success",
                title: "Delete Successfully",
              });
              const remaining = bookings.filter((items) => items._id !== id);
              setBookings(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mb-8">My Order</h1>
      <div className="overflow-x-auto">
        <table className="table w-full bg-white">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Img</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>

              <th>Pay</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.username}</td>
                <td>{booking.email}</td>
                <td>
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img class="lazyload" data-src={booking.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>{booking.name}</td>
                <td>${booking.price}</td>
                <td>${booking.order}</td>
                <td>${booking.total}</td>

                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-xs bg-green-500 text-white  border-0 ">
                        Pay
                      </button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <button className="btn btn-xs disabled: bg-indigo-500 text-white border-0 ">
                      paid
                    </button>
                  )}
                </td>
                <td>
                  {booking._id && (
                    <button
                      onClick={() => handleCancel(booking._id)}
                      className="btn btn-xs text-white bg-red-500 border-0"
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
