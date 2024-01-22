import React from "react";
import { Col, Row } from "antd";
import clsx from "clsx";
import styles from "./Countup.module.scss";
import { useSpring, animated } from "react-spring";

export default function Countup() {
  const props = useSpring((number) => ({ val: number, from: { val: 0 } }));

  return (
    <div className="mt-10 bg-purple-200 py-10">
      <Row className={styles.boxContent}>
        <Col xs={12} md={6} lg={6} className={styles.boxItem}>
          <img
            src={"https://demo2.cybersoft.edu.vn/static/media/003-students.e1a7c67b.png"}
            alt="..."
          />
          <animated.h1>9000</animated.h1>
          <p>Học Viên</p>
        </Col>

        <Col xs={12} md={6} lg={6} className={styles.boxItem}>
          <img
            src={"https://demo2.cybersoft.edu.vn/static/media/001-timetable.0e009173.png"}
            alt="..."
          />
          <h1>1000</h1>
          <p>Khóa Học</p>
        </Col>

        <Col xs={12} md={6} lg={6} className={clsx(styles.boxItem, "mt-10 md:mt-0")}>
          <img
            src={"https://demo2.cybersoft.edu.vn/static/media/002-hourglass.548810be.png"}
            alt="..."
          />
          <h1>33200</h1>
          <p>Giờ Học</p>
        </Col>

        <Col xs={12} md={6} lg={6} className={clsx(styles.boxItem, "mt-10 md:mt-0")}>
          <img
            src={"https://demo2.cybersoft.edu.vn/static/media/004-teacher.5bbd6eec.png"}
            alt="..."
          />
          <h1>400</h1>
          <p>Giảng Viên</p>
        </Col>
      </Row>
    </div>
  );
}
