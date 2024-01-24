import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../slices/authSlice";
import { Navigate, useSearchParams } from "react-router-dom";
import formStyles from "../../components/formStyles.module.scss";
import Swal from "sweetalert2";
export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onBlur",
  });
  const [searchParams] = useSearchParams();

  const { currentUser, isLoading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSignin = async (values) => {
    try {
      await dispatch(signin(values)).unwrap();
      // Swal.fire({
      //   position: "top-end",
      //   icon: "success",
      //   title: "Your work has been saved",
      //   showConfirmButton: false,
      //   timer: 1500,
      // }).then(() => {
      //   // Chuyển hướng đến trang chủ
      //   window.location.href = "/";
      // });
      alert("Login success");
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
    console.log(errors);
  };

  if (currentUser) {
    // Nếu có thông tin đăng nhập của user => điều hướng về trang home
    const url = searchParams.get("from") || "/";
    return <Navigate to={url} replace />;
  }

  return (
    <div className={`${formStyles.form}`}>
      <div>
        <form
          onSubmit={handleSubmit(handleSignin, handleError)}
          className={`${formStyles.form_background}`}
        >
          <div className={`${formStyles.form_container}`}>
            <h1 className="mb-2 text-4xl font-semibold">Đăng nhập</h1>
            <p className="mb-8 text-sm text-gray-400">
              {"("}Hoặc sử dụng tài khoản bạn vừa đăng ký{")"}
            </p>
            <div className={`${formStyles.form_input}`}>
              <input
                placeholder="Tài Khoản"
                {...register("taiKhoan")}
                className="w-full p-3 duration-300 rounded-md outline-none"
              />
              {errors.taiKhoan && <p className="text-red-500">{errors.taiKhoan.message}</p>}
            </div>
            <div className={`${formStyles.form_input}`}>
              <input
                className="w-full p-3 duration-300 rounded-md outline-none"
                type="password"
                placeholder="Mật Khẩu"
                {...register("matKhau")}
              />
              {errors.matKhau && <p className="text-red-500">{errors.matKhau.message}</p>}
            </div>

            <div className="text-center mt-4">
              <button className="btn btn-success btn-lg" type="submit" disabled={isLoading}>
                Đăng Nhập
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
