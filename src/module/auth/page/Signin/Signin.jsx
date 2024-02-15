import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import formStyles from "../../components/formStyles.module.scss";
import Swal from "sweetalert2";
import { login } from "../../../../redux/slices/authSlice";
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
    mode: "onSubmit",
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
              <div className="rounded-md shadow-md">
                <input
                  placeholder="Tài Khoản"
                  {...register("taiKhoan")}
                  className="w-full p-3 duration-300 rounded-md outline-none"
                />
                {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
              </div>
            </div>
            <div className={`${formStyles.form_input}`}>
              <input
                className="w-full p-3 duration-300 rounded-md outline-none"
                type="password"
                placeholder="Mật Khẩu"
                {...register("matKhau")}
              />
              {errors.matKhau && <p>{errors.matKhau.message}</p>}
            </div>

            <div className="text-center mt-4">
              <button
                className="bg-[#3FAA8F] hover:bg-green-600 text-white font-bold px-10 py-3 rounded-full shadow-lg sm:mb-0 text-sm uppercase transition-transform duration-300 transform hover:scale-95 "
                type="submit"
                disabled={isLoading}
              >
                Đăng Nhập
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
