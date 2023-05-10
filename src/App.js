import React, { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Payment from "./Pages/Dashboard/Payment";
// import Users from "./Pages/Dashboard/Users";
import AdminProtected from "./Pages/Routes/AdminProtected";
import { closeRoutes } from "./Pages/Routes/CloseRoutes";
import { openRoutes } from "./Pages/Routes/OpenRoutes";
import Protected from "./Pages/Routes/Protected";
import Footer from "./Pages/Shared/Footer";
import PreLoader from "./Pages/Shared/PreLoader";
import "./styles.css";
// import MyProfile from "./Pages/Dashboard/MyProfile";
const MyProfile = lazy(() => import("./Pages/Dashboard/MyProfile"));
const Payment = lazy(() => import("./Pages/Dashboard/Payment"));
const Users = lazy(() => import("./Pages/Dashboard/Users"));
const MyOrder = lazy(() => import("./Pages/Dashboard/MyOrder"));
const ManageProduct = lazy(() => import("./Pages/Dashboard/ManageProduct"));

const Feedback = lazy(() => import("./Pages/Dashboard/Feedback"));
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));

const AddProduct = lazy(() => import("./Pages/Dashboard/AddProduct"));

function App() {
  return (
    <div>
      <Suspense fallback={<PreLoader />}>
        <Routes>
          {openRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}

          <Route element={<Protected />}>
            {closeRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />}></Route>
            ))}
          </Route>

          <Route element={<Protected />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="myOrder" element={<MyOrder />} />
              <Route path="review" element={<Feedback />} />
              <Route path="payment/:paymentId" element={<Payment />} />
              <Route path="myProfile" element={<MyProfile />} />
              <Route element={<AdminProtected />}>
                <Route path="users" element={<Users />} />

                <Route path="addProduct" element={<AddProduct />} />

                <Route path="manageProduct" element={<ManageProduct />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
