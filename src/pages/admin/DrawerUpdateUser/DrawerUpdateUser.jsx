import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { Select, message } from "antd";
import "./DrawerUpdateUser.scss";
import { userService } from "../../../services/userServices";
import { getAllUsers } from "../../../redux/slices/userSlice";
import FormInput from "../../../components/FormInput/FormInput";

export default function DrawerUpdateUser({ setClose }) {
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const dispatch = useDispatch();
  const [maLoaiNguoiDung, setMaLoaiNguoiDung] = useState("");

  const formik = useFormik({
    initialValues: {
      hoTen: "",
      email: "",
      soDT: "",
      taiKhoan: "",
      matKhau: "",
      maNhom: "GP09",
      maLoaiNguoiDung: "HV",
    },
    onSubmit: (values) => {
      userService
        .updateUsers(values)
        .then(() => {
          message.success("Cập nhật người dùng thành công!");
          dispatch(getAllUsers());
          setClose();
          formik.resetForm();
        })
        .catch((err) => {
          message.error(err.response.data);
        });
    },
    validationSchema: yup.object({
      hoTen: yup
        .string()
        .required("Trường này không dược để trống!")
        .matches(
          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
          "Họ tên chỉ được chứa các kí tự!"
        ),
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
        .required("Trường này không dược để trống!")
        .min(3, "Mật khẩu cần có ít nhất 3 ký tự"),
    }),
  });

  useEffect(() => {
    setMaLoaiNguoiDung(selectedUser.maLoaiNguoiDung);
    userService
      .searchUsers(selectedUser.taiKhoan)
      .then((res) => {
        formik.setValues({
          hoTen: selectedUser.hoTen,
          email: selectedUser.email,
          taiKhoan: selectedUser.taiKhoan,
          maNhom: "GP09",
          maLoaiNguoiDung: selectedUser.maLoaiNguoiDung,
          soDT: res.data[0].soDt,
          matKhau: res.data[0].matKhau,
        });
      })
      .catch(() => {
        message.error("Không tìm thấy tài khoản này!");
      });
  }, [selectedUser]);

  return (
    <form id="drawer__user--update" onSubmit={formik.handleSubmit}>
      <p className="mb-5 text-sm text-gray-400">
        Bạn có thể thay đổi các thông tin người dùng ngoại trừ tên tài khoản!
      </p>
      <input
        id="taiKhoan"
        type="text"
        value={formik.values.taiKhoan}
        className="bg-[#eee] w-full shadow-md rounded-md mb-5 p-3 cursor-not-allowed text-gray-500"
        disabled
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
      <Select
        id="maLoaiNguoiDung"
        value={maLoaiNguoiDung}
        style={{ width: "100%" }}
        onChange={(value) => {
          formik.values.maLoaiNguoiDung = value;
          setMaLoaiNguoiDung(value);
        }}
        options={[
          { value: "HV", label: "Học Viên" },
          { value: "GV", label: "Giáo Vụ" },
        ]}
        className="mb-5 shadow-md"
      />
      <div className="text-right">
        <button
          type="submit"
          className="px-10 py-3 text-sm font-semibold text-white uppercase duration-300 bg-orange-400 rounded-lg shadow-lg hover:bg-orange-600 hover:scale-90"
        >
          Cập Nhật
        </button>
      </div>
    </form>
  );
}
