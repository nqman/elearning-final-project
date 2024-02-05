import { Col } from "antd";
import React from "react";
import { FaRegThumbsUp, FaEye, FaRegComment } from "react-icons/fa";
import "./BlogItem.module.scss";

const BlogItem = (props) => {
  return (
    <Col className="px-10 mb-16 lg:px-5 lg:pb-10 group" xs={24} md={12}>
      <div className="w-full h-48 overflow-hidden lg:h-60">
        <img
          className="block object-cover w-full h-full duration-300 group-hover:scale-110"
          src={props.dataBlog.hinhAnh}
          alt="..."
        />
      </div>
      <div className="overflow-hidden">
        <h1 className="py-3 text-xl font-semibold min-h-min">{props.dataBlog.tieuDe}</h1>
      </div>
      <div className="block lg:flex justify-between items-center text-[16px]">
        <div className="flex">
          <div className="flex items-center mr-3">
            <FaRegThumbsUp className="mr-1 text-lg text-teal-500 cursor-pointer" />
            <span>300</span>
          </div>
          <div className="flex items-center mr-3">
            <FaRegComment className="mr-1 text-lg text-teal-500 cursor-pointer" />
            <span>500</span>
          </div>
          <div className="flex items-center">
            <FaEye className="mr-1 text-lg text-teal-500 cursor-pointer" />
            <span>2500</span>
          </div>
        </div>
        <p>
          Đăng Bởi <span className="text-pink-500">{props.dataBlog.tacGia}</span>
        </p>
      </div>
      <p className="text-[16px] font-medium text-gray-500 mt-5 mb-2 lg:h-20 md:h-24 h-24 overflow-hidden">
        {props.dataBlog.noiDung}
      </p>
      <button>XEM THÊM</button>
    </Col>
  );
};

export default BlogItem;
