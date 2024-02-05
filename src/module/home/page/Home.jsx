import React from "react";
import InfoCourse from "../components/InfoCourse/InfoCourse";
import Countup from "../components/Countup/Countup";
import Introduce from "../components/Introduce/Introduce";
import FeedBack from "../components/FeedBack/FeedBack";
import Teacher from "../components/Teacher";
import CourseHome from "../components/CourseHome";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <div>
      {/* <Welcome />
      <InfoCourse /> */}
      <Introduce />
      <CourseHome />
      <Countup />
      <Teacher />
      <FeedBack />
    </div>
  );
}
