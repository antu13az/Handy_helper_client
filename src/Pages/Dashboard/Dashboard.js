import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import SideBar from "./SideBar";
import Navber from "../Shared/Navber";

const Dashboard = () => {
  return (
   <>
    <Navber color="#f5fdfd" />
    <SideBar>
      <Outlet />
    </SideBar>
   </>
  );
};

export default Dashboard;
