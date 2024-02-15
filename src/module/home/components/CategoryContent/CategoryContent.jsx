import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { message } from "antd";
import { useParams } from "react-router-dom";
import { courseService } from "../../../../apis/courseAPI";

const CategoryContent = () => {
  const [course, setCourse] = useState([]);
  const { maDanhMuc } = useParams();
  useEffect(() => {
    courseService
      .getCoursesByCategory(maDanhMuc)
      .then((res) => {
        setCourse(res.data);
      })
      .catch(() => {
        message.error("Không thể lấy dữ liệu khóa học!");
      });
  }, [maDanhMuc]);

  return (
    <div>
      <div className="container mx-auto ">
        <div className="clear-both mb-10 text-base font-semibold title">
          <span className="px-3 py-3 m-5 border-2 rounded-full border-zinc-300">
            <i className="mr-2 text-yellow-400 fa-solid fa-desktop"></i>
            {course[0]?.danhMucKhoaHoc.tenDanhMucKhoaHoc}
          </span>
        </div>
        <div className="px-5">
          <div className="grid gap-10 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:place-items-center">
            {course.map((item, index) => {
              return (
                <CourseCard
                  key={index}
                  tenDanhMucKhoaHoc={item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                  hinhAnh={item.hinhAnh}
                  maKhoaHoc={item.maKhoaHoc}
                  moTa={item.moTa}
                  luotXem={item.luotXem}
                  isPopular={item.luotXem >= 3000 ? true : false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryContent;
