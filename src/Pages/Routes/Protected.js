import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../../firebaseCredential";
import PreLoader from "../Shared/PreLoader";

const Protected = () => {
  const [user, isLoading] = useAuthState(auth);
  const location = useLocation();
  if (isLoading) {
    return <PreLoader />;
  }
  if (!user) {
    signOut(auth)
    return <Navigate to="/singIn" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default Protected;
