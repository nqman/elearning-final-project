import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Navigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import { login } from "../../../../redux/slices/authSlice";
import FormInput from "../../../../components/FormInput/FormInput";
export default function Signin() {
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      handleSignin(formik.values);
    },
    validationSchema: yup.object({
      taiKhoan: yup.string().required("Trường này không dược để trống!"),
      matKhau: yup
        .string()
        .required("Trường này không được để trống!")
        .matches(
          /^(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
          "Mật khẩu cần ít nhất 8 ký tự, gồm chữ, số và ký tự in hoa"
        ),
    }),
  });
  const [searchParams] = useSearchParams();

  const { currentUser, isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignin = async (credentials) => {
    try {
      await dispatch(login(credentials)).unwrap();
      await Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  const handleError = (errors) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  };

  if (currentUser) {
    const url = searchParams.get("from") || "/";
    return <Navigate to={url} replace />;
  }
  return (
    <form className="text-center" onSubmit={formik.handleSubmit}>
      <h1 className="mb-2 text-4xl font-semibold">Đăng Nhập</h1>
      <p className="mb-8 text-sm text-gray-400">
        {"("}Hoặc sử dụng tài khoản bạn vừa đăng ký{")"}
      </p>
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
      <div className="mb-3 sm:mt-8">
        <NavLink to="/login">
          <span className="text-sm italic duration-300 cursor-pointer hover:text-orange-400 hover:underline">
            Quên mật khẩu?
          </span>
        </NavLink>
      </div>
      <button className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-teal-500 hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg sm:mb-0 mb-5">
        Đăng nhập
      </button>
    </form>
  );
}
