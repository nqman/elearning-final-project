import { Option, Select, Typography } from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import CourseItem from "../../../../../components/CourseItem";
import { getCategoryCourseAPI } from "../../../../../apis/courseAPI";

export default function CateGoryCourse({ courses }) {
  const limit = useRef(4);
  const [cateCourses, setCateCourses] = useState(null);
  const [selectedCate, setSelectedCate] = useState(null);
  const [coursesData, setCoursesData] = useState([]);

  const getCateCourses = () => {
    if (!courses) return;
    if (courses.length < limit.current) {
      setCoursesData(courses);
      return;
    }
    const cateCourses = courses
      .filter((course) => course.danhMucKhoaHoc.maDanhMucKhoahoc === selectedCate)
      .slice(0, limit.current);
    setCoursesData(cateCourses);
  };
  useEffect(() => {
    const getCourseCategory = async () => {
      try {
        const data = await getCategoryCourseAPI();
        setCateCourses(data);
        setSelectedCate(data[0].maDanhMuc);
      } catch (error) {
        console.log(error);
      }
    };
    getCourseCategory();
  }, []);

  useEffect(() => {
    getCateCourses();
    console.log(selectedCate);
  }, [selectedCate]);
  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row gap-4">
        <Typography variant="h3" className="text-primary-main ">
          Khóa học chủ đề
        </Typography>
        <div className="w-full md:w-36 md:ml-2">
          {cateCourses && (
            <Select
              className=""
              label="Chọn chủ đề khóa học"
              value={cateCourses[0].maDanhMuc}
              onChange={(value) => {
                setSelectedCate(value);
              }}
            >
              {cateCourses.map(({ maDanhMuc, tenDanhMuc }) => (
                <Option key={maDanhMuc} value={maDanhMuc}>
                  {tenDanhMuc}
                </Option>
              ))}
            </Select>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {coursesData.map((course) => (
          <CourseItem key={course.maKhoaHoc} course={course} />
        ))}
      </div>
      <div className="flex items-center justify-center w-full my-8">
        {coursesData.length === 0 && (
          <Typography variant="h3">Không có khóa học nào thuộc chủ đề này!</Typography>
        )}
      </div>
    </div>
  );
}
