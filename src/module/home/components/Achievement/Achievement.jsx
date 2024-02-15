import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import course from "../../../../assets/img/achievement_course.png";
import route from "../../../../assets/img/achievement_route.png";
import system from "../../../../assets/img/achievement_system.png";
import mentor from "../../../../assets/img/achievement_mentor.png";
import certification from "../../../../assets/img/achievement_certification.png";
import "./Achievement.scss";

const Achievement = () => {
  return (
    <div className="px-4 py-6 mx-auto max-w-screen-2xl 2xl:px-0">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative bg-blue-500 text-black col-span-1 row-span-2 p-5 text-white duration-300 md:col-span-2 pb-28 bg-main achievement-card lg:col-span-1">
          <div className="relative">
            <div className="flex items-center">
              <img src={course} alt="course" className="object-cover w-14 me-2" />
              <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">KHÓA HỌC</h3>
            </div>
            <p className="my-3">
              <span className="font-bold">Học qua dự án thực tế</span>, học đi đôi với hành, không
              lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực
              thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay
            </p>
            <ul className="">
              <li className="flex my-3 ">
                <CheckOutlined className="mt-1 me-2" />
                <p>Hơn 1000 bài tập và dự án thực tế</p>
              </li>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Công nghệ cập nhật mới nhất</p>
              </li>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Hình ảnh, ví dụ, bài giảng sinh động trực quan</p>
              </li>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Tư duy phân tích, giải quyết vấn đề trong dự án</p>
              </li>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án</p>
              </li>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Cơ hội thực tập tại các công ty lớn như FPT, Microsoft</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative p-5 text-white duration-300 bg-orange-400 achievement-card">
          <div className="relative">
            <div className="flex items-center">
              <img src={route} alt="route" className="object-cover w-14 me-2" />
              <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">LỘ TRÌNH</h3>
            </div>
            <ul>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</p>
              </li>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Học, luyện tập code, kỹ thuật phân tích, soft skill</p>
              </li>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Huấn luyện để phát triển năng lực và niềm đam mê lập trình</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative p-5 text-white duration-300 bg-blue-400 achievement-card">
          <div className="relative">
            <div className="flex items-center">
              <img src={system} alt="system" className="object-cover w-14 me-2" />
              <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">HỆ THỐNG</h3>
            </div>
            <ul>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên</p>
              </li>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</p>
              </li>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>
                  Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học
                  tập
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative p-5 text-white duration-300 bg-purple-400 achievement-card">
          <div className="relative">
            <div className="flex items-center">
              <img src={mentor} alt="mentor" className="object-cover w-14 me-2" />
              <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">GIẢNG VIÊN</h3>
            </div>
            <ul>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Tương tác cùng mentor và giảng viên qua phần thảo luận</p>
              </li>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Review code và đưa ra các nhận xét góp ý</p>
              </li>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Chấm điểm tương tác thảo luận giữa các học viên</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative p-5 text-white duration-300 bg-red-400 achievement-card">
          <div className="relative">
            <div className="flex items-center">
              <img src={certification} alt="certification" className="object-cover w-14 me-2" />
              <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">CHỨNG NHẬN</h3>
            </div>
            <ul>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Chấm bài và có thể vấn đáp trực tuyến để review</p>
              </li>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo</p>
              </li>
              <li className="flex my-3">
                <CheckOutlined className="mt-1 me-2" />
                <p>Kết nối CV của bạn đến với các đối tác của E learning</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
