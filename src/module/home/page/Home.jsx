import React from "react";
import Countup from "../components/Countup/Countup";
import FeedBack from "../components/FeedBack/FeedBack";
import Teacher from "../components/Teacher";
import CourseHome from "../components/CourseHome";
import Banner from "../components/Banner/Banner";
import Achievement from "../components/Achievement/Achievement";

export default function Home() {
  return (
    <div>
      <Banner />
      <Achievement />
      <CourseHome />
      <Countup />
      <Teacher />
      <FeedBack />
    </div>
  );
}
