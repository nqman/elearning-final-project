import React, { useEffect, useState } from "react";
import {
  CaretRightOutlined,
  EditOutlined,
  FileExcelOutlined,
  SafetyCertificateOutlined,
  ScheduleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Tabs, message, notification } from "antd";
import "./Profile.scss";
import avatar from "../../assets/img/home_carousel_06.jpg";

import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/userServices";
import { getAccountInfo } from "../../redux/slices/userSlice";
import InfoCourse from "../../module/home/components/InfoCourse/InfoCourse";
import InfoDetail from "../../module/home/components/InfoDetail/InfoDetail";

export default function Profile() {
  const [account, setAccount] = useState({});
  const [card, setCard] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const accountInfo = useSelector((state) => state.user.accountInfo);
  const navigate = useNavigate();
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
      userService
        .updateUsers({
          ...values,
          hoTen: accountInfo.hoTen,
          email: accountInfo.email,
          soDT: accountInfo.soDT,
        })
        .then(() => {
          dispatch(getAccountInfo());
          setCard(false);
          api.open({
            message: <h1 className="text-lg font-semibold">Đổi mật khẩu</h1>,
            description: "Thành công thay đổi mật khẩu. Mật khẩu mới sẽ được áp dụng ngay lập tức!",
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
        .catch(() => {
          setCard(false);
          formik.values.matKhau = accountInfo.matKhau;
          api.open({
            message: <h1 className="text-lg font-semibold">Đổi mật khẩu</h1>,
            description: "Thay đổi mật khẩu thất bại. Hệ thống đã xảy ra lỗi khi cập nhật!",
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
      matKhau: yup
        .string()
        .required("Trường này không dược để trống!")
        .min(3, "Mật khẩu cần có ít nhất 3 ký tự"),
    }),
  });

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getAccountInfo());
    userService
      .accountInfo()
      .then((res) => {
        setAccount(res.data);
        formik.values.hoTen = res.data.hoTen;
        formik.values.email = res.data.email;
        formik.values.soDT = res.data.soDT;
        formik.values.taiKhoan = res.data.taiKhoan;
        formik.values.matKhau = res.data.matKhau;
        formik.values.maNhom = res.data.maNhom;
        formik.values.maLoaiNguoiDung = res.data.maLoaiNguoiDung;
      })
      .catch(() => {
        message.info("Vui lòng đăng nhập tài khoản của bạn!");
        navigate("/login");
      });
  }, []);

  const items = [
    {
      key: 1,
      label: (
        <div className="flex items-center justify-center text-lg">
          <SolutionOutlined />
          <span>Thông tin cá nhân</span>
        </div>
      ),
      children: <InfoDetail />,
    },
    {
      key: 2,
      label: (
        <div className="flex items-center justify-center text-lg">
          <ScheduleOutlined />
          <span>Khóa học</span>
        </div>
      ),
      children: <InfoCourse />,
    },
  ];

  return (
    <div>
      {contextHolder}
      <div className="px-4 py-16 text-white bg-orange-400 lg:px-6">
        <div className="mx-auto max-w-screen-2xl">
          <h1 className="mb-2 text-4xl font-bold uppercase sm:text-5xl">Tài khoản</h1>
          <p className="flex items-center text-black sm:text-lg">
            <CaretRightOutlined className="me-1 animate-pulse" />
            Thông tin cá nhân!
          </p>
        </div>
      </div>
      <div className="py-5 mx-auto sm:py-14 max-w-screen-2xl">
        <div className="flex flex-col gap-10 px-4 lg:flex-row lg:px-6">
          <div className="w-full mx-auto lg:w-2/5 sm:w-4/5">
            <form
              className="sticky px-5 py-10 shadow-2xl sm:px-20 top-28 rounded-2xl"
              onSubmit={formik.handleSubmit}
            >
              <div className="relative">
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="object-cover mx-auto rounded-full shadow-2xl h-44 w-44"
                />
                <EditOutlined className="absolute bottom-0 p-3 text-white duration-300 -translate-x-full bg-orange-300 rounded-full shadow-md cursor-pointer left-2/3 hover:bg-orange-500" />
              </div>
              <h3 className="mt-10 text-2xl font-semibold text-center text-orange-400 uppercase">
                Thông tin
              </h3>
              <div className="flex items-center justify-between py-3 my-5 border-b-2">
                <div className="font-medium">Tài khoản</div>
                <div>{account.taiKhoan}</div>
              </div>
              <div className="flex items-center justify-between my-5 border-b-2">
                <div className="font-medium">Mật khẩu</div>
                <input
                  id="matKhau"
                  type="password"
                  className={`py-3 text-right outline-none w-1/2 ${
                    card
                      ? `bg-gray-100 border-b-2 duration-300 ${
                          formik.errors.matKhau && formik.touched.matKhau
                            ? "border-red-500"
                            : "border-orange-400"
                        }`
                      : "cursor-default"
                  }`}
                  value={formik.values.matKhau || ""}
                  readOnly={card ? "" : "readonly"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.matKhau && formik.touched.matKhau ? (
                <p className="mt-2 text-xs italic text-right text-red-500 sm:text-sm">
                  * {formik.errors.matKhau}
                </p>
              ) : (
                ""
              )}
              <div className="flex items-center justify-between py-3 my-5 border-b-2">
                <div className="font-medium">Loại người dùng</div>
                <div className="text-right">
                  {account.maLoaiNguoiDung === "HV" ? "Học viên" : "Giáo vụ"}
                </div>
              </div>
              <div className="flex items-center justify-between py-3 mt-5 mb-10 border-b-2">
                <div className="font-medium">Mã nhóm</div>
                <div className="uppercase">{account.maNhom}</div>
              </div>
              <div className="text-center">
                {card ? (
                  <button className="px-3 py-2 text-white duration-300 bg-orange-400 rounded-lg hover:bg-orange-500 hover:scale-90">
                    Lưu thay đổi
                  </button>
                ) : (
                  <span
                    className="px-3 py-2 text-white duration-300 bg-orange-400 rounded-lg cursor-pointer hover:bg-orange-500 hover:scale-90"
                    onClick={() => {
                      setCard(true);
                      document.getElementById("matKhau").focus();
                    }}
                  >
                    Cập nhật
                  </span>
                )}
              </div>
            </form>
          </div>
          <div className="w-full mx-auto lg:w-3/5 sm:w-4/5">
            <Tabs items={items} />
          </div>
        </div>
      </div>
    </div>
  );
}
