import React from "react";
import { Col, Row } from "antd";
import clsx from "clsx";
import styles from "./Countup.module.scss";
import { useSpring, animated } from "react-spring";

export default function Countup() {
  const customConfig = {
    duration: 4000, // Thời gian hiệu ứng
    delay: 0, // Độ trễ
  };
  const studentsProps = useSpring({ val: 9000, from: { val: 0 }, config: customConfig });
  const coursesProps = useSpring({ val: 1000, from: { val: 0 }, config: customConfig });
  const hoursProps = useSpring({ val: 33200, from: { val: 0 }, config: customConfig });
  const teachersProps = useSpring({ val: 400, from: { val: 0 }, config: customConfig });

  return (
    <div className="mt-10 bg-blue-100 py-10 ">
      <Row className={styles.boxContent}>
        <Col xs={12} md={6} lg={6} className={styles.boxItem}>
          <img
            src={"https://demo2.cybersoft.edu.vn/static/media/003-students.e1a7c67b.png"}
            alt="..."
          />
          <animated.h1>{studentsProps.val.interpolate((val) => Math.floor(val))}</animated.h1>
          <p>Học Viên</p>
        </Col>

        <Col xs={12} md={6} lg={6} className={styles.boxItem}>
          <img
            src={"https://demo2.cybersoft.edu.vn/static/media/001-timetable.0e009173.png"}
            alt="..."
          />
          <animated.h1>{coursesProps.val.interpolate((val) => Math.floor(val))}</animated.h1>
          <p>Khóa Học</p>
        </Col>

        <Col xs={12} md={6} lg={6} className={clsx(styles.boxItem, "mt-10 md:mt-0")}>
          <img
            src={"https://demo2.cybersoft.edu.vn/static/media/002-hourglass.548810be.png"}
            alt="..."
          />
          <animated.h1>{hoursProps.val.interpolate((val) => Math.floor(val))}</animated.h1>
          <p>Giờ Học</p>
        </Col>

        <Col xs={12} md={6} lg={6} className={clsx(styles.boxItem, "mt-10 md:mt-0")}>
          <img
            src={"https://demo2.cybersoft.edu.vn/static/media/004-teacher.5bbd6eec.png"}
            alt="..."
          />
          <animated.h1>{teachersProps.val.interpolate((val) => Math.floor(val))}</animated.h1>
          <p>Giảng Viên</p>
        </Col>
      </Row>
    </div>
  );
}
