import React from "react";
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
