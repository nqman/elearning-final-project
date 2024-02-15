import React, { useState } from "react";
import loginBG from "../../assets/img/login_bg.png";
import loginOverlay from "../../assets/img/login_overlay.png";
import "./login.module.scss";
import Signin from "../../module/auth/page/Signin/Signin";
import Signup from "../../module/auth/page/Signup/Signup";
import { NavLink } from "react-router-dom";
import { AuditOutlined, HomeOutlined } from "@ant-design/icons";

export default function Login() {
  const [form, setForm] = useState("login");

  return (
    <div
      id="login"
      className="flex items-center justify-center w-screen h-screen bg-cover"
      style={{ backgroundImage: `url(${loginBG})` }}
    >
      <div className=" relative flex w-4/5 px-5 bg-white rounded-lg shadow-2xl sm:px-16">
        <div
          className={`items-center justify-center w-full py-12 sm:py-24 overflow-hidden lg:flex lg:w-1/2 lg:pe-16 ${
            form === "login" ? "block" : "hidden"
          }`}
        >
          <div
            className={`relative duration-1000 w-full ${
              form === "login" ? "lg:translate-x-0" : "lg:translate-x-full"
            }`}
          >
            <Signin />
          </div>
        </div>
        <div
          className={`items-center justify-center w-full py-12 sm:py-24 overflow-hidden lg:flex lg:w-1/2 lg:ps-16 ${
            form === "login" ? "hidden" : "block"
          }`}
        >
          <div
            className={`relative duration-1000 w-full ${
              form === "login" ? "lg:-translate-x-full" : "lg:translate-x-0"
            }`}
          >
            <Signup />
          </div>
        </div>
        <div
          id="overlay"
          className={`absolute hidden lg:block w-1/2 h-full top-0 duration-1000 overflow-hidden ${
            form === "login"
              ? "right-0 rounded-tr-lg rounded-br-lg shadow-[-10px_0_5px_-2px_#aaa]"
              : "right-0 -translate-x-full rounded-tl-lg rounded-bl-lg shadow-[10px_0_5px_-2px_#aaa]"
          }`}
          style={{
            backgroundImage: `url(${loginOverlay})`,
            backgroundSize: "250% 100%",
            backgroundPosition: `${form === "login" ? "right center" : "left center"}`,
          }}
        >
          <div
            className={`flex items-center justify-center h-full text-white relative duration-1000 ${
              form === "login" ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold">Xin Chào</h1>
              <p className="mt-3 mb-8">Đăng ký ngay để thiết lập tài khoản của riêng bạn!</p>
              <button
                className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-main hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg border border-white"
                onClick={() => {
                  setForm("register");
                }}
              >
                Đăng ký
              </button>
            </div>
          </div>
          <div
            className={`flex items-center justify-center h-full text-white relative duration-1000 -translate-y-full ${
              form === "login" ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold">Chào Mừng</h1>
              <p className="mt-3 mb-8">Hãy đăng nhập để kết nối với tài khoản của bạn nào!</p>
              <button
                className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-main hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg border border-white"
                onClick={() => {
                  setForm("login");
                }}
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
        <div
          className={`absolute ${form === "login" ? "" : "lg:text-white"} left-5 bottom-5 group`}
          title="Back to Home"
        >
          <NavLink
            to="/"
            className="flex items-center duration-500 group-hover:text-orange-400 group-hover:scale-110"
          >
            <i className="text-sm fa-solid fa-arrow-left-long me-2"></i>
            <HomeOutlined />
          </NavLink>
        </div>
        <div
          className="absolute block cursor-pointer lg:hidden right-5 bottom-5 group"
          title={`${form === "login" ? "Register Now" : "Login Now"}`}
        >
          <div
            className="flex items-center duration-500 group-hover:text-orange-400 group-hover:scale-110"
            onClick={() => {
              form === "login" ? setForm("register") : setForm("login");
            }}
          >
            <AuditOutlined />
            <i className="text-sm fa-solid fa-arrow-right-long ms-2"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
