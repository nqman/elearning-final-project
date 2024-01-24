import React from "react";
import Welcome from "../components/Welcome/Welcome";
import InfoCourse from "../components/InfoCourse/InfoCourse";
import CourseList from "../components/CourseList/CourseList";
import Countup from "../components/Countup/Countup";
import Introduce from "../components/Introduce/Introduce";
import FeedBack from "../components/FeedBack/FeedBack";
import Teacher from "../components/Teacher";

export default function Home() {
  return (
    <div>
      <Welcome />
      <InfoCourse />
      <CourseList />
      <Introduce />
      <Countup />
      <Teacher />
      <FeedBack />
    </div>
  );
}
