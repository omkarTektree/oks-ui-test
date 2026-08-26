import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Commom/Header";
import Sidebar from "../../Components/Commom/Sidebar";
import Footer from "../../Components/Commom/Footer";

const InnerTemplate = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default InnerTemplate;
