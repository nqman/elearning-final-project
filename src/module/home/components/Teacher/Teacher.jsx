import { Rate } from "antd";
import React from "react";
import Slider from "react-slick";
const Teachers = () => {
  // cau hinh cho slick carousel
  let settingsCarouser = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    appendDots: (dots) => {
      return (
        <ul style={{ display: "flex", justifyContent: "center", marginLeft: "10px" }}>{dots}</ul>
      );
    },
    customPaging: (pagi, i) => {
      const style = {
        margin: 10,
        width: 10,
        height: 10,
        borderRadius: "100%",
        display: "inline-block",
        background: "rgb(13, 148, 136)",
        opacity: 0.4,
        transition: "0.4s",
      };
      return <span className="slickDots" style={style} />;
    },
  };
  return (
    <div className="container mx-auto py-10 lg:py-14 px-10 lg:px-5">
      <h1 className="mb-5 text-teal-600 text-lg font-semibold border-2 inline-block rounded-3xl px-5 py-1 border-solid cursor-pointer hover:border-gray-500 transition-all duration-500">
        Giảng Viên Hàng Đầu
      </h1>
      <Slider {...settingsCarouser}>
        <div>
          <div className="text-center flex flex-col items-center hover:shadow-xl p-5 transition-all duration-500">
            <div className="text-center">
              <img
                className="w-24 h-24 object-cover object-center rounded-full"
                src={"https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"}
                alt="teacher e learing"
              />
            </div>
            <h3 className="text-lg mb-2 font-semibold">Big DadMoon</h3>
            <p className="h-14 overflow-hidden">Chuyên gia lĩnh vực lập trình</p>
            <div className="flex items-center justify-center">
              <Rate className="text-lg" disabled defaultValue={5} allowHalf count={5} />
              <span className="text-yellow-500 mt-2 ml-2 inline-block">4.9</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">100 đánh giá</p>
          </div>
        </div>

        <div>
          <div className="text-center flex flex-col items-center hover:shadow-xl p-5 transition-all duration-500">
            <div className="text-center">
              <img
                className="w-24 h-24 object-cover object-center rounded-full"
                src={"https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg"}
                alt="teacher e learing"
              />
            </div>
            <h3 className="text-lg mb-2 font-semibold">IcarDi MenBor</h3>
            <p className="h-14 overflow-hidden">Chuyên gia Vue Js</p>
            <div className="flex items-center justify-center">
              <Rate className="text-lg" disabled defaultValue={5} allowHalf count={5} />
              <span className="text-yellow-500 mt-2 ml-2 inline-block">4.9</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">100 đánh giá</p>
          </div>
        </div>

        <div>
          <div className="text-center flex flex-col items-center hover:shadow-xl p-5 transition-all duration-500">
            <div className="text-center">
              <img
                className="w-24 h-24 object-cover object-center rounded-full"
                src={"https://demo2.cybersoft.edu.vn/static/media/instrutor7.edd00a03.jpg"}
                alt="teacher e learing"
              />
            </div>
            <h3 className="text-lg mb-2 font-semibold">Bladin Slaham</h3>
            <p className="h-14 overflow-hidden">Chuyên gia hệ thống máy tính</p>
            <div className="flex items-center justify-center">
              <Rate className="text-lg" disabled defaultValue={5} allowHalf count={5} />
              <span className="text-yellow-500 mt-2 ml-2 inline-block">5.0</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">100 đánh giá</p>
          </div>
        </div>

        <div>
          <div className="text-center flex flex-col items-center hover:shadow-xl p-5 transition-all duration-500">
            <div className="text-center">
              <img
                className="w-24 h-24 object-cover object-center rounded-full"
                src={"https://demo2.cybersoft.edu.vn/static/media/instrutor8.aec2f526.jpg"}
                alt="teacher e learing"
              />
            </div>
            <h3 className="text-lg mb-2 font-semibold">Chris Andersan</h3>
            <p className="h-14 overflow-hidden">Chuyên gia lĩnh vực Full Skill</p>
            <div className="flex items-center justify-center">
              <Rate className="text-lg" disabled defaultValue={4.5} allowHalf count={5} />
              <span className="text-yellow-500 mt-2 ml-2 inline-block">4.5</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">100 đánh giá</p>
          </div>
        </div>

        <div>
          <div className="text-center flex flex-col items-center hover:shadow-xl p-5 transition-all duration-500">
            <div className="text-center">
              <img
                className="w-24 h-24 object-cover object-center rounded-full"
                src={"https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg"}
                alt="teacher e learing"
              />
            </div>
            <h3 className="text-lg mb-2 font-semibold">VueLo Gadi</h3>
            <p className="h-14 overflow-hidden">Chuyên gia lĩnh vực Phân tích</p>
            <div className="flex items-center justify-center">
              <Rate className="text-lg" disabled defaultValue={5} allowHalf count={5} />
              <span className="text-yellow-500 mt-2 ml-2 inline-block">4.9</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">100 đánh giá</p>
          </div>
        </div>

        <div>
          <div className="text-center flex flex-col items-center hover:shadow-xl p-5 transition-all duration-500">
            <div className="text-center">
              <img
                className="w-24 h-24 object-cover object-center rounded-full"
                src={"https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"}
                alt="teacher e learing"
              />
            </div>
            <h3 className="text-lg mb-2 font-semibold">Hoàng Nam</h3>
            <p className="h-14 overflow-hidden">Chuyên gia lĩnh vực PHP</p>
            <div className="flex items-center justify-center">
              <Rate className="text-lg" disabled defaultValue={4.5} allowHalf count={5} />
              <span className="text-yellow-500 mt-2 ml-2 inline-block">4.5</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">100 đánh giá</p>
          </div>
        </div>

        <div>
          <div className="text-center flex flex-col items-center hover:shadow-xl p-5 transition-all duration-500">
            <div className="text-center">
              <img
                className="w-24 h-24 object-cover object-center rounded-full"
                src={"https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg"}
                alt="teacher e learing"
              />
            </div>
            <h3 className="text-lg mb-2 font-semibold">David Ngô Savani</h3>
            <p className="h-14 overflow-hidden">Chuyên gia lĩnh vực Front End</p>
            <div className="flex items-center justify-center">
              <Rate className="text-lg" disabled defaultValue={5} allowHalf count={5} />
              <span className="text-yellow-500 mt-2 ml-2 inline-block">4.9</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">100 đánh giá</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Teachers;
