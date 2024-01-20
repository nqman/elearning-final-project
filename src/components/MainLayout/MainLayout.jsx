import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import BackToTop from "../BackToTop";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
}
