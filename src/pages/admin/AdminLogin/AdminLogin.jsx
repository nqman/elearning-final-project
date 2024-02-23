import React from "react";
import Lottie from "react-lottie";
import * as animationAdminLogin from "../../../assets/animation/admin_login.json";
import loginBG from "../../../assets/img/login_overlay.png";
import loginFormBG from "../../../assets/background-trang-tinh-khoi---nhe-nhang-nhin-la-yeu-14.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { NavLink, Navigate, useSearchParams } from "react-router-dom";
import FormInput from "../../../components/FormInput/FormInput";
import { login } from "../../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const { currentUser, isLoading, error } = useSelector((state) => state.auth);
  const [searchParams] = useSearchParams();
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
    onSubmit: async (credentials) => {
      handleSiginAdmin(formik.values);
    },
    validationSchema: yup.object({
      taiKhoan: yup.string().required("Trường này không dược để trống!"),
      matKhau: yup
        .string()
        .required("Trường này không dược để trống!")
        .min(3, "Mật khẩu cần có ít nhất 3 ký tự"),
    }),
  });
  const handleSiginAdmin = async (credentials) => {
    try {
      const resp = await dispatch(login(credentials)).unwrap();
      if (resp.maLoaiNguoiDung === "GV") {
        message.success("Đăng nhập thành công!");
        setTimeout(() => {
          window.location.href = "/admin";
        }, 1000);
      } else {
        await Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      message.error(err.response.data);
      formik.resetForm();
    }
  };
  if (currentUser) {
    const url = searchParams.get("from") || "/";
    return <Navigate to={url} replace />;
  }
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
          <form className="w-full px-5 mx-auto sm:w-3/4 sm:px-0" onSubmit={formik.handleSubmit}>
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
            <button className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-teal-400 hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg sm:mb-0 mb-5">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
