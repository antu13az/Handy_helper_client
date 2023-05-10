import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../../firebaseCredential";
import useAdmin from '../../hooks/useAdmin';
import PreLoader from "../Shared/PreLoader";
const AdminProtected = () => {
    const [user, isLoading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation();
    if (isLoading || adminLoading) {
        return <PreLoader />;
    }
    if (!user || !admin) {
        return <Navigate to="/singIn" state={{ from: location }} replace />;
    }

    return <Outlet />;

};

export default AdminProtected;