import React, { useEffect, useState } from "react";
import InfoSkill from "../InfoSkill/InfoSkill";
import { useDispatch, useSelector } from "react-redux";
import { message, notification } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import { FileExcelOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import "./InfoDetail.scss";
import { removeLocal, saveLocal } from "../../../../utils/localStorage";
import { getAccountInfo } from "../../../../redux/slices/userSlice";
import { userService } from "../../../../services/userServices";
import { getLocalData } from "../../../../redux/slices/authSlice";
import { FaRightToBracket } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
const InfoDetail = () => {
  const [card, setCard] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const accountInfo = useSelector((state) => state.user.accountInfo);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      hoTen: accountInfo.hoTen,
      email: accountInfo.email,
      soDT: accountInfo.soDT,
      taiKhoan: accountInfo.taiKhoan,
      matKhau: accountInfo.matKhau,
      maNhom: accountInfo.maNhom,
      maLoaiNguoiDung: accountInfo.maLoaiNguoiDung,
    },
    onSubmit: (values) => {
      const user = getLocalData("currentUser");
      userService
        .updateUsers({ ...values, matKhau: accountInfo.matKhau })
        .then(() => {
          saveLocal("currentUser", {
            ...user,
            hoTen: values.hoTen,
            email: values.email,
            soDT: values.soDT,
          });
          dispatch(getAccountInfo());
          setCard(false);
          api.open({
            message: <h1 className="text-lg font-semibold">Cập Nhật Thông Tin</h1>,
            description:
              "Thông tin cập nhật thành công. Người dùng có thể thay đổi thông tin cá nhân bất kỳ lúc nào!",
            icon: (
              <SafetyCertificateOutlined
                style={{
                  color: "#41b294",
                }}
              />
            ),
            className: "border-l-8 border-[#41b294]",
          });
        })
        .catch((err) => {
          setCard(false);
          formik.values.hoTen = accountInfo.hoTen;
          formik.values.email = accountInfo.email;
          formik.values.soDT = accountInfo.soDT;
          api.open({
            message: <h1 className="text-lg font-semibold">Cập Nhật Thông Tin</h1>,
            description: `Thay đổi thông tin thất bại. ${
              err.response.data ? err.response.data : "Hệ thống đã xảy ra lỗi khi cập nhật!"
            }`,
            icon: (
              <FileExcelOutlined
                style={{
                  color: "red",
                }}
              />
            ),
            className: "border-l-8 border-red-500",
          });
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
    }),
  });

  useEffect(() => {
    userService
      .accountInfo()
      .then((res) => {
        formik.values.hoTen = res.data.hoTen;
        formik.values.email = res.data.email;
        formik.values.soDT = res.data.soDT;
        formik.values.taiKhoan = res.data.taiKhoan;
        formik.values.matKhau = res.data.matKhau;
        formik.values.maNhom = res.data.maNhom;
        formik.values.maLoaiNguoiDung = res.data.maLoaiNguoiDung;
      })
      .catch(() => {
        message.error("Không tìm thấy thông tin người dùng!");
      });
  }, []);

  return (
    <div>
      {contextHolder}
      <form
        className="px-5 py-10 mb-10 shadow-2xl lg:p-10 rounded-2xl"
        onSubmit={formik.handleSubmit}
      >
        <h3 className="text-xl font-semibold text-orange-400 uppercase border-b-2 border-orange-400">
          Chi tiết
        </h3>
        <div className="flex flex-col items-start justify-between py-1 mt-3 min-[400px]:items-center min-[400px]:flex-row">
          <div className="font-bold">Họ tên</div>
          <input
            id="hoTen"
            type="text"
            className={`py-3 min-[400px]:text-right outline-none min-[400px]:w-1/2 w-full min-[400px]:mt-0 mt-3 ${
              card
                ? `bg-gray-100 border-b-2 duration-300 ${
                    formik.errors.hoTen && formik.touched.hoTen
                      ? "border-red-500"
                      : "border-orange-400"
                  }`
                : "cursor-default"
            }`}
            value={formik.values.hoTen || ""}
            readOnly={card ? "" : "readonly"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.hoTen && formik.touched.hoTen ? (
          <p className="text-xs italic text-right text-red-500 sm:text-sm">
            * {formik.errors.hoTen}
          </p>
        ) : (
          ""
        )}
        <div className="flex flex-col flex-wrap items-start justify-between py-1 mt-2 min-[400px]:items-center min-[400px]:flex-row">
          <div className="font-bold">Địa chỉ email</div>
          <input
            id="email"
            type="text"
            className={`py-3 min-[400px]:text-right outline-none min-[400px]:w-1/2 w-full min-[400px]:mt-0 mt-3 ${
              card
                ? `bg-gray-100 border-b-2 duration-300 ${
                    formik.errors.email && formik.touched.email
                      ? "border-red-500"
                      : "border-orange-400"
                  }`
                : "cursor-default"
            }`}
            value={formik.values.email || ""}
            readOnly={card ? "" : "readonly"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.email && formik.touched.email ? (
          <p className="text-xs italic text-right text-red-500 sm:text-sm">
            * {formik.errors.email}
          </p>
        ) : (
          ""
        )}
        <div className="flex flex-col items-start justify-between py-1 mt-2 min-[400px]:items-center min-[400px]:flex-row">
          <div className="font-bold">Số điện thoại</div>
          <input
            id="soDT"
            type="text"
            className={`py-3 min-[400px]:text-right outline-none min-[400px]:w-1/2 w-full min-[400px]:mt-0 mt-3 ${
              card
                ? `bg-gray-100 border-b-2 duration-300 ${
                    formik.errors.soDT && formik.touched.soDT
                      ? "border-red-500"
                      : "border-orange-400"
                  }`
                : "cursor-default"
            }`}
            value={formik.values.soDT || ""}
            readOnly={card ? "" : "readonly"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.soDT && formik.touched.soDT ? (
          <p className="text-xs italic text-right text-red-500 sm:text-sm">
            * {formik.errors.soDT}
          </p>
        ) : (
          ""
        )}
        <div className="mt-5 text-right">
          {card ? (
            <button className="px-3 py-2 text-white duration-300 bg-orange-400 rounded-lg hover:bg-orange-500 hover:scale-90">
              Lưu thay đổi
            </button>
          ) : (
            <span
              className="px-3 py-2 text-white duration-300 bg-orange-400 rounded-lg cursor-pointer hover:bg-orange-500 hover:scale-90"
              onClick={() => {
                setCard(true);
                document.getElementById("hoTen").focus();
              }}
            >
              Cập nhật
            </span>
          )}
        </div>
      </form>
      <InfoSkill />
      <div className="p-10 mt-10 shadow-2xl rounded-2xl">
        <h3 className="text-xl font-semibold text-orange-400 uppercase border-b-2 border-orange-400">
          Tích Lũy
        </h3>
        <div className="grid gap-5 xl:grid-cols-3 pt-7 lg:grid-cols-2 md:grid-cols-3 min-[476px]:grid-cols-2">
          <div className="info__badge flex items-center justify-center cursor-default duration-300 gap-5 p-3 text-white rounded-lg hover:scale-105 bg-[#f39c12]">
            <div>
              <i className="text-xl fa-solid fa-user-clock"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold">Giờ Học</h4>
              <p>80 tiếng</p>
            </div>
          </div>
          <div className="info__badge flex items-center justify-center cursor-default duration-300 gap-5 p-3 text-white bg-[#e74c3c] rounded-lg hover:scale-105">
            <div>
              <i className="text-xl fa-solid fa-school"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold">Buổi Học</h4>
              <p>80 buổi</p>
            </div>
          </div>
          <div className="info__badge flex items-center justify-center cursor-default duration-300 gap-5 p-3 text-white bg-[#9b59b6] rounded-lg hover:scale-105">
            <div>
              <i className="text-xl fa-solid fa-dumbbell"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold">Bài Tập</h4>
              <p>100 bài</p>
            </div>
          </div>
          <div className="info__badge flex items-center justify-center cursor-default duration-300 gap-5 p-3 text-white bg-[#1abc9c] rounded-lg hover:scale-105">
            <div>
              <i className="text-xl fa-solid fa-graduation-cap"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold">Học Lực</h4>
              <p>Trung bình</p>
            </div>
          </div>
          <div className="info__badge flex items-center justify-center cursor-default duration-300 gap-5 p-3 text-white bg-[#2ecc71] rounded-lg hover:scale-105">
            <div>
              <i className="text-xl fa-solid fa-layer-group"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold">Cấp Độ</h4>
              <p>Trung cấp</p>
            </div>
          </div>
          <div className="info__badge flex items-center justify-center cursor-default duration-300 gap-5 p-3 text-white bg-[#3498db] rounded-lg hover:scale-105">
            <div>
              <i className="text-xl fa-solid fa-trophy"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold">Tổng</h4>
              <p>120 điểm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 mt-10 shadow-2xl rounded-2xl">
        <div className="flex justify-end">
          <div
            className="flex items-center justify-center cursor-pointer group"
            onClick={() => {
              removeLocal("currentUser");
              window.location.href = "/login";
            }}
          >
            <FaRightToBracket className="duration-300 group-hover:text-orange-400 me-2" />
            <p className="duration-300 me-2 group-hover:text-orange-400">Đăng Xuất</p>
          </div>
          <div
            className="flex items-center justify-center cursor-pointer group"
            onClick={() => {
              window.location.href = "/admin";
            }}
          >
            <RiAdminFill className="duration-300 group-hover:text-orange-400 me-2" />
            <p className="duration-300 me-2 group-hover:text-orange-400">Đến trang admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDetail;
