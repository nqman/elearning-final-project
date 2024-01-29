import React from "react";
import Welcome from "../components/Welcome/Welcome";
import InfoCourse from "../components/InfoCourse/InfoCourse";
import Course from "../components/Course/Course";
import Countup from "../components/Countup/Countup";
import Introduce from "../components/Introduce/Introduce";
import FeedBack from "../components/FeedBack/FeedBack";
import Teacher from "../components/Teacher";
import CourseHome from "../components/CourseHome";
export default function Home() {
  return (
    <div>
      {/* <Welcome />
      <InfoCourse />*/}
      {/* <Course /> */}
      <CourseHome />
      <Introduce />
      <Countup />
      <Teacher />
      <FeedBack />
    </div>
  );
}
