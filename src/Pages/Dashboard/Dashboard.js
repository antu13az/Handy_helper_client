import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
   <>
    <Header color="#f5fdfd" />
    <SideBar>
      <Outlet />
    </SideBar>
   </>
  );
};

export default Dashboard;
