import React from "react";
import ReactSample from "../../../../assets/img/card_react_sample.jpg";
import { NavLink } from "react-router-dom";
import {
  DisconnectOutlined,
  FileSearchOutlined,
  SafetyCertificateOutlined,
  StarFilled,
} from "@ant-design/icons";
import userIcon from "../../../../assets/img/user_icon.png";
import { Divider, notification } from "antd";
import "./HorizonCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAccountInfo } from "../../../../redux/slices/userSlice";
import { courseService } from "../../../../apis/courseAPI";

const HorizonCard = ({ item, flag = false, index, list, setList = () => {} }) => {
  const { maKhoaHoc, tenKhoaHoc, moTa, luotXem, hinhAnh } = item;
  const accountInfo = useSelector((state) => state.user.accountInfo);
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();

  const unRegisterCourses = () => {
    courseService
      .unRegisterCourses({ maKhoaHoc, taiKhoan: accountInfo.taiKhoan })
      .then(() => {
        list && list.splice(index, 1);
        setList(list);
        api.open({
          message: <h1 className="text-lg font-semibold">Hủy Ghi Danh</h1>,
          description:
            "Thành công hủy ghi danh khóa học. Bạn có thể đăng ký khóa học mới bất kỳ lúc nào!",
          icon: (
            <SafetyCertificateOutlined
              style={{
                color: "#41b294",
              }}
            />
          ),
          className: "border-l-8 border-[#41b294]",
        });
        setTimeout(() => {
          dispatch(getAccountInfo());
        }, [1000]);
      })
      .catch(() => {
        api.open({
          message: <h1 className="text-lg font-semibold">Hủy Ghi Danh</h1>,
          description: "Có lỗi xảy ra. Không thể hủy ghi danh khóa học này!",
          icon: (
            <SafetyCertificateOutlined
              style={{
                color: "red",
              }}
            />
          ),
          className: "border-l-8 border-red-500",
        });
      });
  };

  return (
    <div className="relative flex flex-col items-center mb-10 shadow-lg sm:flex-row sm:h-64 group sm:pe-3 pe-0">
      {contextHolder}
      <div className="w-full h-full overflow-hidden sm:w-2/5">
        <img
          src={hinhAnh}
          alt="Course Banner"
          className="object-cover w-full duration-500 h-80 sm:h-full group-hover:scale-110"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = ReactSample;
          }}
        />
      </div>
      {luotXem >= 3000 ? (
        <span
          id="like__tag--search"
          className="absolute top-0 -left-2 px-3 py-1 text-white bg-red-600 translate-y-[50%] shadow-[6px_5px_10px_black]"
        >
          Yêu thích
        </span>
      ) : (
        <></>
      )}
      <div className="flex flex-col justify-between w-full h-full px-3 py-2 sm:w-3/5 sm:ps-5">
        <div>
          <NavLink to={`/detail/${maKhoaHoc}`}>
            <h4 className="text-xl font-medium duration-300 hover:text-orange-400 line-clamp-1">
              {tenKhoaHoc}
            </h4>
          </NavLink>
          <p className="mt-2 text-gray-400 duration-500 line-clamp-2">{moTa}</p>
          <div className="flex items-center gap-1 my-2 text-yellow-400">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-start pt-3 text-gray-500 sm:justify-end">
            <div className="sm:ms-4 sm:me-0 me-5">
              <i className="text-red-400 fa-regular fa-clock me-2"></i>
              <span>
                72 <span className="hidden sm:inline">giờ</span>
              </span>
            </div>
            <div className="sm:ms-4 sm:me-0 me-5">
              <i className="text-orange-400 fa-solid fa-calendar-days me-2"></i>
              <span>
                12 <span className="hidden sm:inline">tuần</span>
              </span>
            </div>
            <div className="sm:ms-4 sm:me-0 me-5">
              <i className="text-blue-500 fa-regular fa-eye me-2"></i>
              <span>{luotXem}</span>
            </div>
          </div>
          <Divider className="my-2" />
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img src={userIcon} alt="User Icon" className="w-10 me-2" />
              <span>Elon Mush</span>
            </div>
            {flag ? (
              <>
                <button
                  className="hidden px-3 py-2 text-white duration-500 bg-red-400 rounded-md sm:items-center sm:gap-1 hover:bg-red-500 hover:scale-90 sm:flex"
                  onClick={unRegisterCourses}
                >
                  <DisconnectOutlined />
                  Huỷ Ghi Danh
                </button>
                <button className="flex px-3 py-2 text-white duration-500 bg-red-400 rounded-md hover:bg-red-500 hover:scale-90 sm:hidden">
                  <DisconnectOutlined />
                </button>
              </>
            ) : (
              <NavLink to={`/detail/${maKhoaHoc}`}>
                <button className="hidden px-3 py-2 text-white duration-500 bg-orange-400 rounded-md sm:items-center sm:gap-1 hover:bg-orange-500 hover:scale-90 sm:flex">
                  <FileSearchOutlined />
                  Xem Chi Tiết
                </button>
                <button className="flex px-3 py-2 text-white duration-500 bg-orange-400 rounded-md hover:bg-orange-500 hover:scale-90 sm:hidden">
                  <FileSearchOutlined />
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizonCard;
