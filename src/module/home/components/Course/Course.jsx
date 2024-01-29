import React, { useEffect, useState } from "react";
import "./Course.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { courseService } from "./../../../../apis/courseAPI";
import { message, Pagination } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { setPagination } from "../../../../module/auth/slices/coursesSlice";
import CourseCard from "./CourseCard/CourseCard";

const Course = () => {
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
    <section id="course">
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
        <div className="px-4 m-10 mx-auto course_container max-w-screen-2xl">
          <div className="container">
            <div className="grid xl:grid-cols-6 xl:grid-rows-1 md:grid-rows-2 md:grid-cols-3 sm:grid-rows-6 min-h-48">
              <div className="course_box bgs-1 min-h-30 max-h-48">
                <div className="my-10">
                  <h6>Trương trình học</h6>
                  <i className="fa-solid fa-laptop"></i>
                  <p>300</p>
                </div>
              </div>
              <div className="course_box bgs-2">
                <div className="my-10">
                  <h6>nhà sáng tạo</h6>
                  <i className="fa-solid fa-laptop"></i>
                  <p>10000</p>
                </div>
              </div>
              <div className="course_box bgs-3">
                <div className="my-10">
                  <h6>nhà thiết kế</h6>
                  <i className="fa-solid fa-laptop"></i>
                  <p>400</p>
                </div>
              </div>
              <div className="course_box bgs-4">
                <div className="my-10">
                  <h6>bài giảng</h6>
                  <i className="fa-solid fa-laptop"></i>
                  <p>3000</p>
                </div>
              </div>
              <div className="course_box bgs-5">
                <div className="my-10">
                  <h6>video</h6>
                  <i className="fa-solid fa-laptop"></i>
                  <p>40000</p>
                </div>
              </div>
              <div className="course_box bgs-6">
                <div className="my-10">
                  <h6>lĩnh vực</h6>
                  <i className="fa-solid fa-laptop"></i>
                  <p>200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 m-10 mx-auto course_list max-w-screen-2xl">
          <div className="list_info">
            <h6>
              <i className="fa-solid fa-bookmark"></i>Danh sách khóa học
            </h6>
          </div>
          <div className="grid items-center mt-4 gap-y-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
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
    </section>
  );
};

export default Course;
