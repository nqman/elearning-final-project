import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaBook,
  FaBriefcase,
  FaCamera,
  FaConnectdevelop,
  FaLaptopCode,
  FaVideo,
} from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

import { courseService } from "../../apis/courseAPI";
import { Col, message, Pagination, Row } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { setPagination } from "../../redux/slices/coursesSlice";
import style from "./Course.module.scss";
import CourseCard from "../../module/home/components/CourseCard";
export default function Course() {
  const [course, setCourse] = useState([]);
  const [total, setTotal] = useState(0);
  const pagination = useSelector((state) => state.course.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    courseService
      .getCoursesPagination("", pagination, 12)
      .then((res) => {
        setCourse(res.data.items);
        setTotal(res.data.totalCount);
      })
      .catch(() => {
        message.error("Không thể lấy dữ liệu khóa học!");
      });
  }, [pagination]);

  return (
    <div>
      <div className="py-16 text-white bg-orange-400">
        <div className="px-4 mx-auto max-w-screen-2xl">
          <h1 className="mb-2 text-4xl font-bold uppercase sm:text-5xl">KHÓA HỌC</h1>
          <p className="flex items-center text-black sm:text-lg">
            <CaretRightOutlined className="me-1 animate-pulse" />
            Bắt đầu hành trình nào!
          </p>
        </div>
      </div>
      <Row className="flex items-center justify-center my-10 lg:my-20 px-5 lg:px-0">
        <Col
          span={12}
          md={8}
          lg={4}
          className="bg-slate-700 text-white text-center h-40 flex flex-col justify-center items-center w-52"
        >
          <h1 className="text-[20px] font-[500]">Chương Trình Học</h1>
          <FaLaptopCode className="text-4xl mt-2" />
          <p className="mt-3 text-[22px]">30</p>
        </Col>

        <Col
          span={12}
          md={8}
          lg={4}
          className="bg-teal-500 text-white text-center w-56 h-40 flex flex-col justify-center items-center w-52"
        >
          <h1 className="text-[20px] font-[500]">Nhà Sáng Tạo</h1>
          <FaCamera className="text-4xl mt-2" />
          <p className="mt-3 text-[22px]">10000</p>
        </Col>

        <Col
          span={12}
          md={8}
          lg={4}
          className="bg-orange-300 text-white text-center w-56 h-40 flex flex-col justify-center items-center w-52"
        >
          <h1 className="text-[20px] font-[500]">Nhà Thiế Kế</h1>
          <FaBriefcase className="text-4xl mt-2" />
          <p className="mt-3 text-[22px]">400</p>
        </Col>

        <Col
          span={12}
          md={8}
          lg={4}
          className="bg-orange-400 text-white text-center w-56 h-40 flex flex-col justify-center items-center w-52"
        >
          <h1 className="text-[20px] font-[500]">Bài Giảng</h1>
          <FaBook className="text-4xl mt-2" />
          <p className="mt-3 text-[22px]">3000</p>
        </Col>

        <Col
          span={12}
          md={8}
          lg={4}
          className="bg-rose-400 text-white text-center w-56 h-40 flex flex-col justify-center items-center w-52"
        >
          <h1 className="text-[20px] font-[500]">VIDEO</h1>
          <FaVideo className="text-4xl mt-2" />
          <p className="mt-3 text-[22px]">4000</p>
        </Col>

        <Col
          span={12}
          md={8}
          lg={4}
          className="bg-rose-500 text-white text-center w-56 h-40 flex flex-col justify-center items-center w-52"
        >
          <h1 className="text-[20px] font-[500]">Lĩnh Vực</h1>
          <FaConnectdevelop className="text-4xl mt-2" />
          <p className="mt-3 text-[22px]">200</p>
        </Col>
      </Row>
      <div className="px-4 m-10 mx-auto course_list max-w-screen-2xl">
        <div className={style.course_list}>
          <FaBookmark />
          <span>Danh sách khóa học</span>
        </div>

        <div className="grid gap-10 px-4 mt-8 xl:px-0 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          {course.map((item, index) => {
            return (
              <CourseCard
                key={index}
                info={item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                hinhAnh={item.hinhAnh}
                maKhoaHoc={item.maKhoaHoc}
                moTa={item.moTa}
                luotXem={item.luotXem}
              />
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Pagination
            current={pagination}
            total={total}
            onChange={(page) => {
              dispatch(setPagination(page));
              window.scroll({
                top: 400,
                left: 0,
                behavior: "smooth",
              });
            }}
            pageSize={12}
          />
        </div>
      </div>
    </div>
  );
}
