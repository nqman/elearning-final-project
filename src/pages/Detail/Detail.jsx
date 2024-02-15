import React, { useEffect, useState } from "react";
import teacherSample from "../../assets/img/home_carousel_01.jpg";
import { Divider, message, notification } from "antd";
import CourseCard from "../../module/home/components/CourseCard/CourseCard";
import { courseService } from "../../apis/courseAPI";
import { useNavigate, useParams } from "react-router-dom";
import {
  CaretRightOutlined,
  FileExcelOutlined,
  InfoCircleOutlined,
  SafetyCertificateOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { selectCurrentUser } from "../../redux/slices/authSlice";
import { useSelector } from "react-redux";
import { PiStarThin } from "react-icons/pi";
import { FaBook, FaCheck, FaClock, FaLayerGroup, FaUserGraduate } from "react-icons/fa";
import { IoPlayCircle } from "react-icons/io5";
import { FcAlarmClock, FcGraduationCap } from "react-icons/fc";
import { FaBoltLightning, FaPhotoFilm } from "react-icons/fa6";
const Detail = () => {
  const [course, setCourse] = useState([]);
  const [detail, setDetail] = useState({});
  const { maKhoaHoc } = useParams();
  const user = useSelector(selectCurrentUser);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

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
    courseService
      .getCourseInfo(maKhoaHoc)
      .then((res) => {
        setDetail(res.data);
      })
      .catch(() => {
        message.error("Không thể lấy dữ liệu khóa học!");
      });
  }, [maKhoaHoc]);

  const enrollCourse = () => {
    if (user) {
      const data = {
        maKhoaHoc,
        taiKhoan: user.taiKhoan,
      };
      courseService
        .registerCourses(data)
        .then(() => {
          api.open({
            message: <h1 className="text-lg font-semibold">Đăng Ký Khóa Học</h1>,
            description:
              "Đăng ký khóa học thành công. Bạn có thể đăng ký thêm các khóa học khác trong hệ thống!",
            icon: (
              <SafetyCertificateOutlined
                style={{
                  color: "#41b294",
                }}
              />
            ),
            className: "border-l-8 border-[#41b294]",
          });
        })
        .catch((err) => {
          api.open({
            message: <h1 className="text-lg font-semibold">Đăng Ký Khóa Học</h1>,
            description: `${
              err.response.data
                ? err.response.data
                : "Đăng ký khóa học thất bại. Hệ thống đã xảy ra lỗi khi đăng ký khóa học này!"
            }`,
            icon: (
              <>
                {err.response.data ? (
                  <InfoCircleOutlined
                    style={{
                      color: "#0984e3",
                    }}
                  />
                ) : (
                  <FileExcelOutlined
                    style={{
                      color: "red",
                    }}
                  />
                )}
              </>
            ),
            className: `border-l-8 ${err.response.data ? "border-blue-500" : "border-red-500"}`,
          });
        });
    } else {
      api.open({
        message: <h1 className="text-lg font-semibold">Đăng Ký Khóa Học</h1>,
        description: "Bạn cần phải đăng nhập tài khoản trước khi đăng ký các khóa học!",
        icon: (
          <InfoCircleOutlined
            style={{
              color: "#0984e3",
            }}
          />
        ),
        className: "border-l-8 border-blue-500",
      });
      setTimeout(() => {
        navigate("/login");
      }, [3000]);
    }
  };

  return (
    <div id="user_detail">
      {contextHolder}
      <div className="py-16 text-white bg-orange-400">
        <div className="px-4 mx-auto max-w-screen-2xl">
          <h1 className="mb-2 text-4xl font-bold uppercase sm:text-5xl">THÔNG TIN KHÓA HỌC</h1>
          <p className="flex items-center text-black sm:text-lg">
            <CaretRightOutlined className="me-1 animate-pulse" />
            TIẾN LÊN VÀ KHÔNG CHẦN CHỪ!
          </p>
        </div>
      </div>
      <h1 className="block px-4 mt-10 text-2xl font-medium uppercase lg:hidden">
        {detail.tenKhoaHoc}
      </h1>
      <div className="flex flex-col-reverse px-4 mx-auto lg:flex-row max-w-screen-2xl">
        <div className="lg:w-2/3">
          <h1 className="hidden my-10 text-2xl font-medium uppercase lg:block">
            {detail.tenKhoaHoc}
          </h1>
          <div className="flex flex-col items-center justify-between mt-10 mb-10 lg:mt-0 sm:flex-row">
            <div className="flex items-center gap-2 mb-5 sm:mb-0">
              <img
                src={teacherSample}
                alt="Teacher Icon"
                className="object-cover w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-sm text-gray-400">Giảng viên</p>
                <p>Robert Ngô Ngọc</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-5 sm:mb-0">
              <FcGraduationCap className="text-3xl text-teal-500" />

              <div>
                <p className="text-sm text-gray-400">Lĩnh vực</p>
                <p>{detail.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <WechatOutlined className="block text-4xl sm:hidden" />
              <div>
                <div className="flex items-center">
                  <PiStarThin className="text-yellow-500" />
                  <PiStarThin className="text-yellow-500" />
                  <PiStarThin className="text-yellow-500" />
                  <PiStarThin className="text-yellow-500" />
                  <PiStarThin className="text-yellow-500" />
                  <span className="font-medium ms-2">4.9</span>
                </div>
                <p className="text-sm text-gray-400 sm:text-right">100 đánh giá</p>
              </div>
            </div>
          </div>
          <p className="text-gray-500">{detail.moTa}</p>
          <Divider />
          <div>
            <h3 className="mb-3 text-lg font-medium">Những gì bạn sẽ học</h3>
            <div className="flex flex-col gap-3 sm:gap-5 sm:flex-row">
              <div className="sm:w-1/2 ">
                <p>
                  <FaCheck className="text-yellow-500 " /> Xây dựng các ứng dụng web mạnh mẽ, nhanh
                  chóng, thân thiện với người dùng và phản ứng nhanh
                </p>
                <p className="my-3">
                  <FaCheck className="text-yellow-500" /> Đăng ký công việc được trả lương cao hoặc
                  làm freelancer trong một trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có
                  thể tìm thấy trong web dev ngay bây giờ
                </p>
                <p className="my-3">
                  <FaCheck className="text-yellow-500" /> Cung cấp trải nghiệm người dùng tuyệt vời
                  bằng cách tận dụng sức mạnh của JavaScript một cách dễ dàng
                </p>
                <p>
                  <FaCheck className="text-yellow-500" /> Tìm hiểu tất cả về React Hooks và React
                  Components
                </p>
              </div>
              <div className="sm:w-1/2">
                <p>
                  <FaCheck className="text-yellow-500" /> Thông thạo chuỗi công cụ hỗ trợ React, bao
                  gồm cú pháp Javascript NPM, Webpack, Babel và ES6 / ES2015
                </p>
                <p className="my-3">
                  <FaCheck className="text-yellow-500" /> Nhận ra sức mạnh của việc xây dựng các
                  thành phần có thể kết hợp
                </p>
                <p className="my-3">
                  <FaCheck className="text-yellow-500" /> Hãy là kỹ sư giải thích cách hoạt động của
                  Redux cho mọi người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                </p>
                <p>
                  <FaCheck className="text-yellow-500" /> Nắm vững các khái niệm cơ bản đằng sau
                  việc cấu trúc các ứng dụng Redux
                </p>
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <h3 className="mb-5 text-lg font-medium">Nội dung khóa học</h3>
            <div className="mb-10">
              <div className="flex items-center justify-between gap-5 p-5 bg-gray-100">
                <h4 className="text-lg">MỤC I - GIỚI THIỆU</h4>
                <button className="px-3 border-[1px] border-teal-500 text-teal-500 py-2 duration-300 hover:bg-teal-500 hover:text-white">
                  Xem Trước
                </button>
              </div>
              <h5 className="py-3">Bài học</h5>
              <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <IoPlayCircle className="text-teal-500 me-2" />
                  <p className="line-clamp-1">Các khái niệm về React Component</p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <FcAlarmClock className="me-2" />

                  <p>15:00</p>
                </div>
                <div></div>
              </div>
              <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <IoPlayCircle className="text-teal-500 me-2" />
                  <p className="line-clamp-1">Thiết lập môi trường cho Windows</p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <FcAlarmClock className="me-2" />
                  <p>15:00</p>
                </div>
                <div></div>
              </div>
              <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <IoPlayCircle className="text-teal-500 me-2" />
                  <p className="line-clamp-1">Tạo ứng dụng React - React-Scripts</p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <FcAlarmClock className="me-2" />
                  <p>15:00</p>
                </div>
                <div></div>
              </div>
              <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <IoPlayCircle className="text-teal-500 me-2" />
                  <p className="line-clamp-1">
                    Ghi chú nhanh về dấu ngoặc kép cho string interpolation
                  </p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <FcAlarmClock className="me-2" />
                  <p>15:00</p>
                </div>
                <div></div>
              </div>
            </div>
            <div className="mb-10">
              <div className="flex items-center justify-between gap-5 p-5 bg-gray-100">
                <h4 className="text-lg">MỤC II - KIẾN THỨC CĂN BẢN</h4>
                <button className="px-3 border-[1px] border-teal-500 text-teal-500 py-2 duration-300 hover:bg-teal-500 hover:text-white">
                  Xem Trước
                </button>
              </div>
              <h5 className="py-3">Bài học</h5>
              <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <IoPlayCircle className="text-teal-500 me-2" />
                  <p className="line-clamp-1">Trang chủ và thành phần thư mục</p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <FcAlarmClock className="me-2" />
                  <p>15:00</p>
                </div>
                <div></div>
              </div>
              <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <IoPlayCircle className="text-teal-500 me-2" />
                  <p className="line-clamp-1">Hướng dẫn khóa học + Liên kết Github</p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <FcAlarmClock className="me-2" />
                  <p>15:00</p>
                </div>
                <div></div>
              </div>
              <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <IoPlayCircle className="text-teal-500 me-2" />
                  <p className="line-clamp-1">Trang chủ thương mại điện tử + thiết lập SASS</p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <FcAlarmClock className="me-2" />
                  <p>15:00</p>
                </div>
                <div></div>
              </div>
              <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <IoPlayCircle className="text-teal-500 me-2" />
                  <p className="line-clamp-1">Tệp CSS và SCSS</p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <FcAlarmClock className="me-2" />
                  <p>15:00</p>
                </div>
                <div></div>
              </div>
              <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <IoPlayCircle className="text-teal-500 me-2" />
                  <p className="line-clamp-1">
                    React 17: Cập nhật các gói + Phiên bản React mới nhất
                  </p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <FcAlarmClock className="me-2" />
                  <p>15:00</p>
                </div>
                <div></div>
              </div>
            </div>
            <div className="mb-10">
              <div className="flex items-center justify-between gap-5 p-5 bg-gray-100">
                <h4 className="text-lg">MỤC III - KIẾN THỨC CHUYÊN SÂU</h4>
                <button className="px-3 border-[1px] border-teal-500 text-teal-500 py-2 duration-300 hover:bg-teal-500 hover:text-white">
                  Xem Trước
                </button>
              </div>
              <h5 className="py-3">Bài học</h5>
              <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <IoPlayCircle className="text-teal-500 me-2" />
                  <p className="line-clamp-1">connect() and mapStateToProps</p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <FcAlarmClock className="me-2" />
                  <p>15:00</p>
                </div>
                <div></div>
              </div>
              <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <IoPlayCircle className="text-teal-500 me-2" />
                  <p className="line-clamp-1">Trạng thái thư mục vào Redux</p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <FcAlarmClock className="me-2" />
                  <p>15:00</p>
                </div>
                <div></div>
              </div>
              <div className="flex items-center justify-between py-3 px-2 border-b-[1px] border-orange-400/50 duration-300 hover:shadow-lg">
                <div className="flex items-center">
                  <IoPlayCircle className="text-teal-500 me-2" />
                  <p className="line-clamp-1">Thành phần Tổng quan về Bộ sưu tập</p>
                </div>
                <div className="flex items-center justify-end flex-grow">
                  <FcAlarmClock className="me-2" />
                  <p>15:00</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto my-5 lg:my-10 sm:w-2/3 lg:w-1/3 lg:ps-10">
          <div className="sticky p-5 overflow-hidden rounded-md shadow-2xl top-28">
            <div>
              <img src={detail.hinhAnh} alt="Course Banner" />
            </div>
            <p className="my-5 text-2xl font-medium text-right">
              <FaBoltLightning className="text-lg text-orange-400" />
              120.000
              <sup>đ</sup>
            </p>
            <button
              className="w-full py-2 duration-300 border-[1px] border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500 hover:scale-95"
              onClick={enrollCourse}
            >
              ĐĂNG KÝ
            </button>
            <div className="flex items-center justify-between py-5 border-b-[1px] border-gray-200">
              <p className="text-gray-500">
                Ghi danh: <span className="font-medium text-black">22 học viên</span>
              </p>
              <FaUserGraduate className="text-orange-400" />
            </div>
            <div className="flex items-center justify-between py-5 border-b-[1px] border-gray-200">
              <p className="text-gray-500">
                Thời gian: <span className="font-medium text-black">18 giờ</span>
              </p>
              <FaClock className="text-orange-400 " />
            </div>
            <div className="flex items-center justify-between py-5 border-b-[1px] border-gray-200">
              <p className="text-gray-500">
                Tổng: <span className="font-medium text-black">10 bài học</span>
              </p>
              <FaBook className="text-orange-400" />
            </div>
            <div className="flex items-center justify-between py-5 border-b-[1px] border-gray-200">
              <p className="text-gray-500">
                Video: <span className="font-medium text-black">14 buổi</span>
              </p>
              <FaPhotoFilm className="text-orange-400 fa-solid" />
            </div>
            <div className="flex items-center justify-between py-5 border-b-[1px] border-gray-200">
              <p className="text-gray-500">
                Trình độ: <span className="font-medium text-black">trung bình</span>
              </p>
              <FaLayerGroup className="text-orange-400" />
            </div>
            <input
              type="text"
              placeholder="Nhập Mã"
              className="w-full p-3 mt-5 duration-300 border-b-2 border-gray-100 outline-none focus:border-teal-500"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-10 mx-auto max-w-screen-2xl 2xl:px-0">
        <h3 className="text-2xl font-bold text-orange-400">Khóa Học Tham Khảo</h3>
        <div className="grid gap-20 mt-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4">
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
    </div>
  );
};

export default Detail;
