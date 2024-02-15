import React from "react";
import { Col, Row } from "antd";
import clsx from "clsx";
import styles from "./EventContent.module.scss";
import Sponsors from "../Sponsors/Sponsors";

export default function EventContent() {
  return (
    <div className={styles.eventContent}>
      <div className="py-16 mx-auto max-w-screen-2xl">
        <Row>
          <Col className={styles.eventImg} xs={24} lg={12}>
            <img src={require("../../../assets/img/it.ef68b551.png")} alt="" />
          </Col>
          <Col className={clsx(styles.eventItemText, "px-10 lg:px-0")} xs={24} lg={12}>
            <h1>SỰ KIỆN CÔNG NGHỆ DÀNH CHO STARTUP</h1>
            <h4>Nơi gặp gỡ của các chuyên gia CNTT trẻ Việt đầy tham vọng</h4>
            <p>
              National Engineering Conference (NEC) là sự kiện đầu tiên tại Việt Nam,nội dung chương
              trình tập trung vào cả 4 lĩnh vực công nghệ quan trọng tiêu biểu, bao gồm trí tuệ nhân
              tạo, viễn thông, tên lửa và công nghệ phần mềm.Đây còn là nơi giao lưu chia sẻ,học hỏi
              kinh nghiệm từ những người đi trước,được dẫn dắt bởi những người lãnh đạo,được nhiều
              người quan tâm vào các dự án,và các nhà đầu tư .Hơn hết,sự kiện sẽ xây dựng và kết nối
              cộng đồng khởi nghiệp .
            </p>
            <br />
            <br />
            <div className={styles.eventBtn}>
              <button className="me-10">THAM GIA</button>
              <button>TÌM HIỂU THÊM</button>
            </div>
            <br />
            <br />
          </Col>
        </Row>
      </div>
      <Sponsors />
    </div>
  );
}
