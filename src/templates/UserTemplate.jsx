import React, { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Loading from "../pages/Loading/Loading";
import { useSelector } from "react-redux";
import { UpSquareFilled } from "@ant-design/icons";
import "./UserTemplate.scss";

const UserTemplate = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);

  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      {isLoading ? <Loading /> : <></>}
      <div className="relative flex flex-col justify-between min-h-screen">
        <Header />
        <Outlet />
        <Footer />
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed z-50 text-4xl duration-300 text-[#1dd1a1] sm:text-5xl back-to-top right-5 bottom-5 hover:scale-90 hover:text-[#10ac84] shadow-[3px_3px_6px_#333] flex items-center justify-center"
          >
            <UpSquareFilled />
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default UserTemplate;
