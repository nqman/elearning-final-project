import React from "react";
import { Divider } from "antd";
import user from "../../../../assets/img/user_icon.png";
import { BellOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import ReactSample from "../../../../assets/img/card_react_sample.jpg";
import { useDispatch } from "react-redux";
import { setNavbarActive } from "../../../../redux/slices/navbarSlice";
import { FcAlarmClock } from "react-icons/fc";
import { MdCalendarMonth } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
const tempContent =
  "Lập trình Frontend là công việc sử dụng các ngôn ngữ HTML, CSS và JavaScript để thiết kế và xây dựng giao diện cho một trang web hoặc ứng dụng web mà người dùng có thể xem và tương tác trực tiếp";

const CourseCard = ({
  isPopular = true,
  tenDanhMucKhoaHoc = "Lập trình Front-end",
  hinhAnh = ReactSample,
  maKhoaHoc = "1636364364967",
  moTa = tempContent,
  luotXem = 100,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="duration-300 shadow-md hover:shadow-xl group">
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src={hinhAnh}
            alt="Ảnh bìa khóa học"
            className="object-cover w-full aspect-[3/2] group-hover:scale-110 duration-300"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = ReactSample;
            }}
          />
        </div>
        {isPopular ? (
          <span
            id="like__tag--home"
            className="absolute top-0 -left-2 px-3 py-1 text-white bg-red-600 translate-y-[50%] shadow-[6px_5px_10px_black]"
          >
            Yêu thích
          </span>
        ) : (
          <></>
        )}

        <span className="`absolute bottom-0 left-0 px-3 py-1 bg-teal-500 text-white translate-y-[50%] shadow-lg ${}`">
          {tenDanhMucKhoaHoc}
        </span>
      </div>
      <div className="p-2">
        <NavLink
          to={`/detail/${maKhoaHoc}`}
          className="font-medium duration-500 line-clamp-2 hover:text-orange-400"
          onClick={() => {
            dispatch(setNavbarActive(false));
          }}
        >
          {moTa + tempContent}
        </NavLink>
        <div className="flex flex-wrap items-center justify-between pt-3 text-gray-500">
          <p>
            <FcAlarmClock className="text-red-400 me-2" />
            <>72 giờ</>
          </p>
          <p>
            <MdCalendarMonth className="text-orange-400 me-2" />
            <>12 tuần</>
          </p>
          <p>
            <IoEyeSharp className="text-blue-500 me-2" />
            <>{luotXem}</>
          </p>
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex flex-wrap items-center justify-between px-5 py-3">
        <div className="flex items-center">
          <img src={user} alt="User" className="object-cover w-10 me-2" />
          <span className="text-xs text-gray-500 sm:text-base">Elon Musk</span>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 line-through sm:text-sm">
            400.000<sup>đ</sup>
          </p>
          <div className="flex items-center">
            <BellOutlined id="sale-off" className="text-[#e55039] sm:text-base me-1 text-sm" />
            <p className="text-sm font-medium sm:text-lg">
              120.000<sup>đ</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
