import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { signupAPI } from "../../../../apis/userAPI";
import formStyles from "../../components/formStyles.module.scss";
import { Button } from "@mui/base";
const validationSchema = object({
  taiKhoan: string().required("Tài khoản không được để trống"),
  matKhau: string()
    .required("Mật khẩu không được để trống")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Mật khẩu phải có ít nhất 8 kí tự, gồm 1 kí tự hoa, 1 kí tự thường và 1 kí tự số"
    ),
  email: string().required("Email không được để trống").email("Email không đúng định dạng"),
  hoTen: string().required("Họ tên không được để trống"),
  soDt: string().required("Số điện thoại không được để trống"),
});

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      manhom: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (credentials) => {
    try {
      setIsLoading(true);
      setError(null);
      await signupAPI(credentials);
      navigate("/login");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${formStyles.form} `}>
      <form
        noValidate
        onSubmit={handleSubmit(handleSignup)}
        className={`${formStyles.form_background}`}
      >
        <div className={` ${formStyles.form_container}`}>
          <h1 className="mb-2 text-4xl font-semibold">Đăng kí</h1>
          {/* TÀI KHOẢN INPUT  */}
          <div className={`${formStyles.form_input}`}>
            <input type="text" placeholder="Tài Khoản" {...register("taiKhoan")} />
            {errors.taiKhoan && (
              <span className=" text-xs italic text-left text-red-500 sm:text-sm block">
                {errors.taiKhoan.message}
              </span>
            )}
          </div>
          {/* MẬT KHẨU INPUT  */}
          <div className={`${formStyles.form_input}`}>
            <input type="password" placeholder="Mật khẩu" {...register("matKhau")} />
            {errors.matKhau && (
              <span className="text-xs italic text-left text-red-500 sm:text-sm block">
                {errors.matKhau.message}
              </span>
            )}
          </div>
          {/* EMAIL INPUT  */}
          <div className={`${formStyles.form_input}`}>
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && (
              <span className="text-xs italic text-left text-red-500 sm:text-sm block">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* HỌ TÊN INPUT */}
          <div className={`${formStyles.form_input}`}>
            <input type="text" placeholder="Họ tên" {...register("hoTen")} />
            {errors.hoTen && (
              <span className="text-xs italic text-left text-red-500 sm:text-sm block">
                {errors.hoTen.message}
              </span>
            )}
          </div>
          {/* SĐT INPUT */}
          <div className={`${formStyles.form_input}`}>
            <input type="text" placeholder="SĐT" {...register("soDt")} />
            {errors.soDt && (
              <span className="text-xs italic text-left text-red-500 sm:text-sm block">
                {errors.soDt.message}
              </span>
            )}
          </div>

          {error && <p>{error}</p>}

          <div className="text-center mt-4">
            <button
              className="bg-[#3FAA8F] hover:bg-green-600 text-white font-bold px-10 py-3 rounded-full shadow-lg sm:mb-0 text-sm uppercase transition-transform duration-300 transform hover:scale-95 "
              type="submit"
              disabled={isLoading}
            >
              Đăng Kí
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
