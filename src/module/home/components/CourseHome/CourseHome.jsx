import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useDispatch } from "react-redux";
import CourseCard from "../CourseCard";
import { courseService } from "../../../../apis/courseAPI";
export default function CourseHome() {
  const [course, setCourse] = useState([]);
  const dispatch = useDispatch();
  let count = 0;

  useEffect(() => {
    window.scroll(0, 0);
    courseService
      .getAllCourses()
      .then((res) => {
        setCourse(res.data);
      })
      .catch(() => {
        message.error("Không thể lấy dữ liệu khóa học!");
      });
  }, []);
  return (
    <div>
      <div className="px-4 py-10 mx-auto max-w-screen-2xl 2xl:px-0">
        <h3 className="text-2xl font-bold text-orange-400">Khóa Học Phổ Biến</h3>
        <div className="grid gap-10 px-4 mt-8 xl:px-0 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          {course.map((item, index) => {
            return item.luotXem >= 3000 ? (
              <CourseCard
                key={index}
                tenDanhMucKhoaHoc={item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                hinhAnh={item.hinhAnh}
                maKhoaHoc={item.maKhoaHoc}
                moTa={item.moTa}
                luotXem={item.luotXem}
                isPopular={item.luotXem >= 3000 ? true : false}
              />
            ) : (
              ""
            );
          })}
        </div>
      </div>
      <div className="px-4 py-10 mx-auto max-w-screen-2xl 2xl:px-0">
        <h3 className="text-2xl font-bold text-orange-400">Khóa Học Tham Khảo</h3>
        <div className="grid gap-10 px-4 mt-8 xl:px-0 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          {course.map((item, index) => {
            return index <= 3 ? (
              <CourseCard
                key={index}
                tenDanhMucKhoaHoc={item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                hinhAnh={item.hinhAnh}
                maKhoaHoc={item.maKhoaHoc}
                moTa={item.moTa}
                luotXem={item.luotXem}
                isPopular={item.luotXem >= 3000 ? true : false}
              />
            ) : (
              ""
            );
          })}
        </div>
      </div>
      <div className="px-4 py-10 mx-auto max-w-screen-2xl 2xl:px-0">
        <h3 className="text-2xl font-bold text-orange-400">Khóa Học Front-end</h3>
        <div className="grid gap-10 px-4 mt-8 xl:px-0 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
          {course.map((item, index) => {
            if (item.danhMucKhoaHoc.maDanhMucKhoahoc === "FrontEnd") {
              count++;
            }
            return item.danhMucKhoaHoc.maDanhMucKhoahoc === "FrontEnd" ? (
              count <= 4 ? (
                <CourseCard
                  key={index}
                  tenDanhMucKhoaHoc={item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                  hinhAnh={item.hinhAnh}
                  maKhoaHoc={item.maKhoaHoc}
                  moTa={item.moTa}
                  luotXem={item.luotXem}
                  isPopular={item.luotXem >= 3000 ? true : false}
                />
              ) : (
                ""
              )
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
}
