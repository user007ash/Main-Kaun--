import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
