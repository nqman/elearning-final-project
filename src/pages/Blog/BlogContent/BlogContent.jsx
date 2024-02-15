import React from "react";
import { Col, Row } from "antd";
import BlogItem from "../BlogItem/BlogItem";
import styles from "./BlogContent.module.scss";
import clsx from "clsx";
import time from "../../../assets/img/time.jpg";
import tailwindcss from "../../../assets/img/tailwindcss.jpg";
import html from "../../../assets/img/html-structure.jpg";
import materialUI from "../../../assets/img/html-structure.jpg";
import extensions from "../../../assets/img/extensions.png";
import asyncAwait from "../../../assets/img/async-await.png";
import typescript from "../../../assets/img/typescript.jpg";
import antd from "../../..//assets/img/antd.png";
import logoUser1 from "../../../assets/img/home_carousel_01.jpg";
import logoUser2 from "../../../assets/img/home_carousel_02.jpg";
import logoUser3 from "../../../assets/img/home_carousel_03.jpg";
import { NotificationOutlined } from "@ant-design/icons";

export default function BlogContent() {
  // nội dung tin tức
  const dataBlog = [
    {
      hinhAnh: time,
      tieuDe: "Thời gian và động lực",
      noiDung:
        'Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...',
      tacGia: "Johny Nguyễn",
    },
    {
      hinhAnh: tailwindcss,
      tieuDe: "Tailwind css và cách cài đặt cơ bản",
      noiDung:
        'Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...',
      tacGia: " Nguyên Minh",
    },
    {
      hinhAnh: html,
      tieuDe: "Cấu trúc cơ bản trong HTML",
      noiDung: "Custom theme Material UI với TypeScript đơn giản, hiệu quả...",
      tacGia: "Steven",
    },
    {
      hinhAnh: materialUI,
      tieuDe: "Material UI custom theme với TypeScript",
      noiDung:
        "Trắc hẳn ai cũng biết một trang web thì không thể nào thiếu đi HTML và HTML làm nên cấu trúc của một trang web...",
      tacGia: "Johny Đặng",
    },
    {
      hinhAnh: extensions,
      tieuDe: "Cách tạo một component nhanh chóng chỉ bằng 3 ký tự",
      noiDung:
        "Tạo một component nhiều lúc cũng khá mất nhiều thời gian nên mình xin giới thiệu extention này cho mọi người nhé...",
      tacGia: "Steve John",
    },
    {
      hinhAnh: asyncAwait,
      tieuDe: "Xử lý bất đồng bộ async - await trong Javascript (phần 2)",
      noiDung:
        "Async/await là cơ chế giúp bạn thực thi các thao tác bất đồng bộ một cách tuần tự hơn , giúp đoạn code nhìn qua tưởng như đồng...",
      tacGia: "Thái Khang",
    },
    {
      hinhAnh: typescript,
      tieuDe: "TyperScrip là gì, Vì sao nên dùng TyperScript",
      noiDung: "Link khóa học cho anh em nào tò mò ( Đừng lo vì tất cả đều miễn......",
      tacGia: "Cowseph",
    },
    {
      hinhAnh: antd,
      tieuDe: "Làm việc với Front-end dễ dàng hơn cùng Ant Design?",
      noiDung:
        "Một thư viện mở cho phép các anh em developer tiết kiệm thời gian trong việc xây dựng...",
      tacGia: "Mỹ Hạnh",
    },
  ];

  return (
    <div id="blog" className="py-10 mx-auto max-w-screen-2xl">
      <Row>
        <Col xs={24} lg={17} className="mx-auto">
          <div className="flex items-center px-10 mb-5 lg:px-5">
            <NotificationOutlined className="flex items-center justify-center text-xl text-main animate-bounce" />
            <p className="text-lg font-semibold text-black ms-2">Phù hợp với bạn!</p>
          </div>
          <Row>
            {dataBlog.map((ele, index) => (
              <BlogItem key={index} dataBlog={ele} />
            ))}
          </Row>
        </Col>
        <Col className="relative hidden px-10 mt-10 lg:px-2 lg:mt-12 lg:block" xs={24} lg={7}>
          <div className="sticky left-0 pb-10 top-28">
            <Row>
              <Col className="border-t-2 md:px-5 lg:px-0 border-main" span={24} md={12} lg={24}>
                <div className={clsx(styles.blogCategory, "border border-solid border-gray-400")}>
                  <h1 className="py-2 text-base font-semibold text-center border-b border-gray-400 border-solid">
                    Các chủ đề được đề xuất
                  </h1>
                  <div className="px-5">
                    <ul className="text-lg font-medium text-gray-500">
                      <li className="py-2 transition-all duration-300 cursor-pointer hover:pt-1 hover:pb-3 hover:text-teal-500">
                        Front-end / Mobile apps
                      </li>
                      <li className="py-2 transition-all duration-300 cursor-pointer hover:pt-1 hover:pb-3 hover:text-teal-500">
                        UI / UX / Design
                      </li>
                      <li className="py-2 transition-all duration-300 cursor-pointer hover:pt-1 hover:pb-3 hover:text-teal-500">
                        BACK-END
                      </li>
                      <li className="py-2 transition-all duration-300 cursor-pointer hover:pt-1 hover:pb-3 hover:text-teal-500">
                        Thư viện
                      </li>
                      <li className="py-2 transition-all duration-300 cursor-pointer hover:pt-1 hover:pb-3 hover:text-teal-500">
                        Chia sẻ người trong nghề
                      </li>
                      <li className="py-2 transition-all duration-300 cursor-pointer hover:pt-1 hover:pb-3 hover:text-teal-500">
                        Châm ngôn IT
                      </li>
                      <li className="py-2 transition-all duration-300 cursor-pointer hover:pt-1 hover:pb-3 hover:text-teal-500">
                        Chủ đề khác
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="border-t-2 md:px-5 lg:px-0 border-main" span={24} md={12} lg={24}>
                <div className={clsx(styles.blogCategory, "border border-solid border-gray-400")}>
                  <h1 className="py-2 text-base font-semibold text-center border-b border-gray-400 border-solid">
                    Bài đăng được đề xuất
                  </h1>
                  <div className="p-5 mb-3 duration-300 hover:shadow-xl hover:bg-gray-200">
                    <h5 className="font-semibold">Routing trong reactjs</h5>
                    <p className="mt-2 mb-3 text-gray-400 line-clamp-1">
                      Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...
                    </p>
                    <div className="flex items-center">
                      <img
                        src={logoUser1}
                        alt="Logo Poster 01"
                        className="object-cover w-10 h-10 rounded-full me-2"
                      />
                      <p className="text-gray-500">Huỳnh Văn Thiên</p>
                    </div>
                  </div>
                  <div className="p-5 mb-5 duration-300 hover:shadow-xl hover:bg-gray-200">
                    <h5 className="font-semibold">Lập trình hướng đối tượng oop</h5>
                    <p className="mt-2 mb-3 text-gray-400 line-clamp-1">
                      Chúng ta sẽ cùng nhau tìm hiểu cách oop trong reactjs
                    </p>
                    <div className="flex items-center">
                      <img
                        src={logoUser2}
                        alt="Logo Poster 02"
                        className="object-cover w-10 h-10 rounded-full me-2"
                      />
                      <p className="text-gray-500">Nguyên Văn Vũ</p>
                    </div>
                  </div>
                  <div className="p-5 mb-3 duration-300 hover:shadow-xl hover:bg-gray-200">
                    <h5 className="font-semibold">Xử Lý Bất Đồng Bộ Trong Javascript</h5>
                    <p className="mt-2 mb-3 text-gray-400 line-clamp-2">
                      Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời gian delay (gọi API,
                      lấy dữ liệu từ Database, đọc/ghi file,...). Và đây...
                    </p>
                    <div className="flex items-center">
                      <img
                        src={logoUser3}
                        alt="Logo Poster 03"
                        className="object-cover w-10 h-10 rounded-full me-2"
                      />
                      <p className="text-gray-500">Lê Minh Khang</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
