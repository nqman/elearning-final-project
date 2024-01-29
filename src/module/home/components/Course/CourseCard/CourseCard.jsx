import React from "react";
import "./CourseCard.module.scss";
import { NavLink } from "react-router-dom";
import ReactSample from "../../../../../assets/card_react_sample.jpg";
import AdImg from "../../../../../assets/course-ad-img.png";

const tempContent =
  "Lập trình Frontend là công việc sử dụng các ngôn ngữ HTML, CSS và JavaScript để thiết kế và xây dựng giao diện cho một trang web hoặc ứng dụng web mà người dùng có thể xem và tương tác trực tiếp";

const CourseCard = ({
  info = "Lập trình Front-end",
  hinhAnh = ReactSample,
  maKhoaHoc = "1636364364967",
  moTa = tempContent,
  luotXem = 100,
}) => {
  return (
    <NavLink to={`/detail/${maKhoaHoc}`} className="card group" href="#">
      <div className="overflow-hidden">
        <img
          src={hinhAnh}
          alt="info"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = ReactSample;
          }}
          className="object-cover w-full h-48 duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-white shadow-md stiker">{info}</span>
      <div className="card_body">
        <h6 className="mb-3 duration-300 line-clamp-2 group-hover:text-orange-400">{moTa}</h6>
        <div className="flex items-center title_maker">
          <div className="img_footer me-2">
            <img src={AdImg} alt="people" />
          </div>
          <span className="col-span-4 name_maker">Elon Musk</span>
        </div>
      </div>
      <div className="card_footer">
        <div className="price">
          <p className="price_start">
            800.000 <sup>đ</sup>
          </p>
          <p className="price_sell">
            400.000 <sup>đ</sup>
          </p>
        </div>
        <div className="danh_gia">
          <i className="fa-solid fa-star"></i>
          <span className="text_star">4.9</span>
          <span className="number_people">({luotXem})</span>
        </div>
      </div>
    </NavLink>
  );
};

export default CourseCard;
