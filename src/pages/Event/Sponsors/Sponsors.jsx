import React from "react";
import viettel from "../../../assets/img/viettel.jpg";
import bidv from "../../../assets/img/bidv.jpg";
import vingroup from "../../../assets/img/logo-vingroup1.jpg";
import momo from "../../../assets/img/momo.png";
import bgCreators from "../../../assets/img/lightTech.32807735.jpg";
import creator1 from "../../../assets/img/home_carousel_01.jpg";
import creator2 from "../../../assets/img/home_carousel_02.jpg";
import creator3 from "../../../assets/img/home_carousel_03.jpg";
import creator4 from "../../../assets/img/home_carousel_04.jpg";
import creator5 from "../../../assets/img/home_carousel_05.jpg";
import creator6 from "../../../assets/img/home_carousel_06.jpg";
import creator7 from "../../../assets/img/home_carousel_07.jpg";
import creator8 from "../../../assets/img/home_carousel_08.jpg";
import "./Sponsors.module.scss";

export default function Sponsors() {
  return (
    <div id="user__event--sponsor">
      <div
        className="relative py-20 sponsor__creators"
        style={{
          backgroundImage: `url(${bgCreators})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative px-4 mx-auto max-w-screen-2xl">
          <h1 className="mb-10 text-3xl font-bold text-center text-yellow-500">
            CÁC NHÀ ĐỒNG SÁNG TẠO
          </h1>
          <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2">
            <div className="text-center md:text-left">
              <img
                src={creator1}
                alt="Creator 1"
                className="object-cover w-2/3 mx-auto md:w-full"
              />
              <div className="text-white">
                <h5 className="mt-3 font-semibold">NGUYỄN NHẬT</h5>
                <p>CEO TECHVIET PRODUCTION</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <img
                src={creator2}
                alt="Creator 2"
                className="object-cover w-2/3 mx-auto md:w-full"
              />
              <div className="text-white">
                <h5 className="mt-3 font-semibold">NGUYỄN NHẬT NAM</h5>
                <p>CEO TECHVIET PRODUCTION</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <img
                src={creator3}
                alt="Creator 3"
                className="object-cover w-2/3 mx-auto md:w-full"
              />
              <div className="text-white">
                <h5 className="mt-3 font-semibold">NGUYỄN NAM</h5>
                <p>CEO TECHVIET PRODUCTION</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <img
                src={creator4}
                alt="Creator 4"
                className="object-cover w-2/3 mx-auto md:w-full"
              />
              <div className="text-white">
                <h5 className="mt-3 font-semibold">JHONNY ĐẶNG</h5>
                <p>CEO TECHVIET PRODUCTION</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <img
                src={creator5}
                alt="Creator 5"
                className="object-cover w-2/3 mx-auto md:w-full"
              />
              <div className="text-white">
                <h5 className="mt-3 font-semibold">NGÔ HENRY</h5>
                <p>CEO TECHVIET PRODUCTION</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <img
                src={creator6}
                alt="Creator 6"
                className="object-cover w-2/3 mx-auto md:w-full"
              />
              <div className="text-white">
                <h5 className="mt-3 font-semibold">VƯƠNG PHẠM VN</h5>
                <p>CEO TECHVIET PRODUCTION</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <img
                src={creator7}
                alt="Creator 7"
                className="object-cover w-2/3 mx-auto md:w-full"
              />
              <div className="text-white">
                <h5 className="mt-3 font-semibold">ROBER IMACU</h5>
                <p>CEO TECHVIET PRODUCTION</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <img
                src={creator8}
                alt="Creator 8"
                className="object-cover w-2/3 mx-auto md:w-full"
              />
              <div className="text-white">
                <h5 className="mt-3 font-semibold">KHOA PUG</h5>
                <p>CEO TECHVIET PRODUCTION</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-24 mx-auto max-w-screen-2x">
        <h1 className="mb-5 text-3xl font-bold text-center text-yellow-500">
          NHÀ TÀI TRỢ CHƯƠNG TRÌNH
        </h1>
        <br />
        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2">
          <div>
            <img
              src={viettel}
              alt="..."
              className="object-cover md:w-2/3 w-1/2 shadow-xl rounded-xl lg:w-full mx-auto h-[220px]"
            />
            <h2 className="mt-5 text-xl font-medium text-center uppercase">VIETTEL</h2>
          </div>

          <div>
            <img
              src={bidv}
              alt="..."
              className="object-cover md:w-2/3 w-1/2 shadow-xl rounded-xl lg:w-full mx-auto h-[220px]"
            />
            <h2 className="mt-5 text-xl font-medium text-center uppercase">BIDV</h2>
          </div>

          <div>
            <img
              src={vingroup}
              alt="..."
              className="object-cover md:w-2/3 w-1/2 shadow-xl rounded-xl lg:w-full mx-auto h-[220px]"
            />
            <h2 className="mt-5 text-xl font-medium text-center uppercase">VINGROUP</h2>
          </div>

          <div>
            <img
              src={momo}
              alt="..."
              className="object-cover md:w-2/3 w-1/2 shadow-xl rounded-xl lg:w-full mx-auto h-[220px]"
            />
            <h2 className="mt-5 text-xl font-medium text-center uppercase">MOMO</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
