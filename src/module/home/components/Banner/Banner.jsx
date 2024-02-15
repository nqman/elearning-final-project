import React from "react";
import HomeBanner1 from "../../../../assets/img/home_banner_01.png";
import HomeBanner2 from "../../../../assets/img/home_banner_02.png";
import HomeBanner3 from "../../../../assets/img/home_banner_03.png";
import HomeBanner4 from "../../../../assets/img/home_banner_04.png";
import HomeBanner5 from "../../../../assets/img/home_banner_05.png";
import "./Banner.scss";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col items-center p-4 py-6 mx-auto max-w-screen-2xl md:flex-row">
      <div className="relative order-2 w-full text-center md:order-1 md:w-1/2 ps-0 lg:ps-20 md:text-left">
        <div className="absolute box-decor box-decor__1"></div>
        <div className="absolute box-decor box-decor__2"></div>
        <div className="absolute box-decor box-decor__3"></div>
        <div
          id="triangle"
          className="absolute top-0 left-[10vw] md:-top-[10vw] md:-left-[2vw]"
        ></div>
        <img
          src={HomeBanner2}
          alt="Home Banner 2"
          className="absolute object-cover w-1/5 md:right-[35%] right-[15%]"
          id="fly-and-cloud"
        />
        <p className="text-2xl font-bold leading-snug sm:text-3xl xl:leading-snug md:leading-snug sm:leading-snug md:text-4xl xl:text-5xl">
          Chào mừng
        </p>
        <p className="text-2xl font-bold leading-snug sm:text-3xl xl:leading-snug md:leading-snug sm:leading-snug md:text-4xl xl:text-5xl">
          đến nền tảng trực tuyến
        </p>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            "E Learning",
            1000,
            "Efficient & Flexible",
            1000,
            "Education unlimited",
            1000,
            "Expand knowledge",
            1000,
            "Embrace future",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="block text-3xl font-bold leading-normal xl:leading-normal md:leading-normal sm:leading-normal md:text-5xl xl:text-6xl text-main sm:text-4xl"
          deletionSpeed={25}
          cursor={false}
        />
        <NavLink to="/course">
          <button className="px-5 py-3 mt-5 text-xs text-white duration-500 bg-blue-700 rounded-md shadow-lg sm:text-sm xl:text-xl hover:bg-orange-500 hover:scale-90 lg:text-lg md:text-md">
            Bắt đầu nào
          </button>
        </NavLink>
      </div>
      <div className="relative order-1 w-full md:w-1/2 md:order-2">
        <img src={HomeBanner1} alt="Home Banner 01" className="object-cover w-full" />
        <img id="cloud1" src={HomeBanner3} alt="Item Banner 3" className="absolute object-cover" />
        <img id="cloud2" src={HomeBanner3} alt="Item Banner 3" className="absolute object-cover" />
        <img id="cloud3" src={HomeBanner3} alt="Item Banner 3" className="absolute object-cover" />
        <img
          id="code"
          src={HomeBanner4}
          alt="Item Banner 4"
          className="absolute object-cover w-1/6"
        />
        <img
          src={HomeBanner5}
          alt="Item Banner 5"
          id="thought"
          className="absolute object-cover w-1/6"
        />
      </div>
    </div>
  );
};

export default Banner;
