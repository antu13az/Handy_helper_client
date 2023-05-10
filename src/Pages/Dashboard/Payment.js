import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_API } from "../../Config";
const LazyCheckoutForm = React.lazy(() => import("./CheckoutForm"));
const stripePromise = loadStripe(
  "pk_test_51L4IKhHZ8E6UAH6wo8gGmAaGdTRFfdcetA4PEjj5NpaemH63c7JSuGXUirsHeBRNIFG05ivqkwaR1NsqyKZENLh600qfr9Hovx"
);
const Payment = () => {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState([]);
  useEffect(() => {
    fetch(`${BASE_API}/getMyItems/${paymentId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, [paymentId]);
  return (
    <>
      <h1 className="text-center font-bold text-2xl mb-8">Payment</h1>
      <div className="PaymentInfo">
        <div className="card w-[40rem] paymentDetails ">
          <div className="card-body items-center text-center ">
            <figure className="">
              <img
                src={payment.img}
                alt="tools"
                className="h-24 w-24 rounded-full border-red-500 border"
              />
            </figure>
            <h2 className="card-title">{payment.name}</h2>
            <p>Price: ${payment.price}</p>
            <p>Order Quantity:{payment.order}ps</p>
            <p>Total Price: ${payment.total}</p>
          </div>
        </div>
        <div className="paymentCard">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <React.Suspense fallback="Loading...">
                <LazyCheckoutForm payment={payment} />
              </React.Suspense>
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
