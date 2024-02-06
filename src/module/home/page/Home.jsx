import React from "react";
import InfoCourse from "../components/InfoCourse/InfoCourse";
import Countup from "../components/Countup/Countup";

import FeedBack from "../components/FeedBack/FeedBack";
import Teacher from "../components/Teacher";
import CourseHome from "../components/CourseHome";
import Welcome from "../components/Welcome";
import Banner from "../components/Banner/Banner";
import Achievement from "../components/Achievement/Achievement";

export default function Home() {
  return (
    <div>
      {/* <Welcome />
      <InfoCourse /> */}
      <Banner />
      <Achievement />
      <CourseHome />
      <Countup />
      <Teacher />
      <FeedBack />
    </div>
  );
}
