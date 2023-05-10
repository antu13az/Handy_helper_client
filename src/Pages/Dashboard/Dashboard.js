import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
   <>
    <Navber background="#021718e0" color="white"/>
    <SideBar>
      <Outlet />
    </SideBar>
   </>
  );
};

export default Dashboard;
