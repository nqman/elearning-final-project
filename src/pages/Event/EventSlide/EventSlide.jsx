import React from "react";
import styles from "./EventSlide.module.scss";

export default function EventSlide() {
  return (
    <div className={styles.eventSlide}>
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex items-center w-full">
          <div className="mr-5 text-center lg:mr-10">
            <h1 className="text-5xl font-bold text-yellow-500 lg:text-6xl">11</h1>
            <p className="text-xl font-semibold">NGÀY</p>
          </div>

          <div className="mr-5 text-center lg:mr-10">
            <h1 className="text-5xl font-bold text-orange-500 lg:text-6xl">13</h1>
            <p className="text-xl font-semibold">GIỜ</p>
          </div>

          <div className="mr-5 text-center lg:mr-10">
            <h1 className="text-5xl font-bold text-pink-500 lg:text-6xl">27</h1>
            <p className="text-xl font-semibold">PHÚT</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-purple-500 lg:text-6xl">05</h1>
            <p className="text-xl font-semibold">GIÂY</p>
          </div>
        </div>
        <div className={styles.eventText}>
          <h1 className="py-5 text-4xl font-semibold">SỰ KIỆN CÔNG NGHỆ LỚN NHẤT 2023</h1>
          <p className="text-xl font-semibold text-yellow-500 ">
            10 - 31 THÁNG 9, 2023, LANDMARK 81, HCMC, VIỆT NAM
          </p>
        </div>
      </div>
    </div>
  );
}
