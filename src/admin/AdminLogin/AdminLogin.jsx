import React from "react";
import Lottie from "react-lottie";
import * as animationAdminLogin from "../../assets/animations/admin_login.json";
import loginBG from "../../assets/imgs/login_overlay.png";
import loginFormBG from "../../assets/imgs/login_bg.png";
import FormInput from "../../Components/FormInput/FormInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { userService } from "../../services/userServices";
import { message } from "antd";
import { saveLocal } from "../../utils/localStorage";
import { NavLink } from "react-router-dom";

const AdminLogin = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationAdminLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      userService
        .login(values)
        .then((res) => {
          if (res.data.maLoaiNguoiDung === "GV") {
            saveLocal("user", res.data);
            message.success("Đăng nhập thành công!");
            setTimeout(() => {
              window.location.href = "/admin";
            }, [1000]);
          } else {
            message.error("Bạn không có quyền truy cập vào trang quản lý!");
            setTimeout(() => {
              window.location.href = "/";
            }, [1000]);
          }
        })
        .catch((err) => {
          message.error(err.response.data);
          formik.resetForm();
        });
    },
    validationSchema: yup.object({
      taiKhoan: yup.string().required("Trường này không dược để trống!"),
      matKhau: yup
        .string()
        .required("Trường này không dược để trống!")
        .min(3, "Mật khẩu cần có ít nhất 3 ký tự"),
    }),
  });

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${loginBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center h-screen gap-10 px-5 mx-auto max-w-screen-2xl">
        <div className="hidden w-1/2 lg:block">
          <Lottie options={defaultOptions} width={"100%"} />;
        </div>
        <div
          className="w-full px-3 py-16 text-center shadow-2xl sm:w-3/4 lg:px-10 lg:w-1/2 rounded-xl sm:px-0"
          style={{
            backgroundImage: `url(${loginFormBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        >
          <h1 className="mb-2 text-4xl font-semibold">Đăng Nhập</h1>
          <p className="mb-8 text-sm text-gray-600">
            {"("}Đăng nhập bằng tài khoản giáo vụ để tới trang quản lý{")"}
          </p>
          <form
            className="w-full px-5 mx-auto sm:w-3/4 sm:px-0"
            onSubmit={formik.handleSubmit}
          >
            <FormInput
              id="taiKhoan"
              type="text"
              placeholder="Tài Khoản"
              formik={formik}
              errors={formik.errors.taiKhoan}
              touched={formik.touched.taiKhoan}
              value={formik.values.taiKhoan}
            />
            <FormInput
              id="matKhau"
              type="password"
              placeholder="Mật Khẩu"
              formik={formik}
              errors={formik.errors.matKhau}
              touched={formik.touched.matKhau}
              value={formik.values.matKhau}
            />
            <div className="flex items-center justify-center mb-3 sm:mt-8">
              <div
                className="me-5"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                <span className="text-sm italic text-blue-500 duration-300 cursor-pointer hover:text-orange-400 hover:underline">
                  Đi tới trang chủ
                </span>
              </div>
              <NavLink to="/admin/login">
                <span className="text-sm italic duration-300 cursor-pointer hover:text-orange-400 hover:underline">
                  Quên mật khẩu?
                </span>
              </NavLink>
            </div>
            <button className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-main hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg sm:mb-0 mb-5">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
