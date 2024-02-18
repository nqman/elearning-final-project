import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupAPI } from "../../../../apis/userAPI";
import FormInput from "../../../../components/FormInput/FormInput";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      hoTen: "",
      email: "",
      soDT: "",
      taiKhoan: "",
      matKhau: "",
      maNhom: "GP09",
    },
    onSubmit: (values) => {
      handleSignup(formik.values);
    },
    validationSchema: yup.object({
      hoTen: yup.string().trim().required("Trường này không được để trống!"),
      email: yup
        .string()
        .required("Trường này không dược để trống!")
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Email này không hợp lệ!"),
      soDT: yup
        .string()
        .required("Trường này không dược để trống!")
        .matches(/^[0-9\-+]{9,15}$/, "Số điện thoại này không hợp lệ!"),
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

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (credentials) => {
    try {
      setIsLoading(true);
      setError(null);
      await signupAPI(credentials);

      Swal.fire({
        title: "Chúc mừng bạn!",
        text: "Đăng kí thành công",
        icon: "success",
      });
      navigate("/login");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="text-center" onSubmit={formik.handleSubmit}>
      <h1 className="mb-2 text-4xl font-semibold">Đăng Ký</h1>
      <p className="mb-8 text-sm text-gray-400">
        Tạo tài khoản để có thể ghi danh các khóa học hấp dẫn nào!
      </p>
      <FormInput
        id="hoTen"
        type="text"
        placeholder="Họ tên"
        formik={formik}
        errors={formik.errors.hoTen}
        touched={formik.touched.hoTen}
        value={formik.values.hoTen}
      />
      <FormInput
        id="email"
        type="text"
        placeholder="Địa chỉ email"
        formik={formik}
        errors={formik.errors.email}
        touched={formik.touched.email}
        value={formik.values.email}
      />
      <FormInput
        id="soDT"
        type="text"
        placeholder="Số điện thoại"
        formik={formik}
        errors={formik.errors.soDT}
        touched={formik.touched.soDT}
        value={formik.values.soDT}
      />
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
      {/* <FormInput
        id="maNhom"
        placeholder="Mã nhóm"
        formik={formik}
        errors={formik.errors.maNhom}
        touched={formik.touched.maNhom}
        value={formik.values.maNhom}
      >
        <option value="">-- Chọn mã nhóm --</option>
        <option value="GP01">GP01</option>
        <option value="GP02">GP02</option>
        <option value="GP03">GP03</option>
      </FormInput> */}
      {/* <label className="flex items-center justify-center text-left lg:justify-start">
        <input id="receiveNotification" type="checkbox" /> */}
      {/* <span className="text-sm text-gray-500 ms-2" style={{ userSelect: "none" }}>
          Nhận các thông báo mới về khóa học và sự kiện qua email đã đăng ký!
        </span> */}
      {/* </label> */}
      <button className="px-10 py-3 text-sm font-semibold text-white uppercase rounded-full bg-teal-500 hover:bg-[#36867b] duration-300 hover:scale-90 shadow-lg my-5 sm:mt-8 sm:mb-2">
        Đăng ký
      </button>
    </form>
  );
}
