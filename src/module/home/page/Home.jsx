import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
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
      <Header />
      <Welcome />
      <InfoCourse />
      <CourseList />
      <Introduce />
      <Countup />
      <Teacher />
      <FeedBack />
      <Footer />
    </div>
  );
}
