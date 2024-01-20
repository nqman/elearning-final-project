import React from "react";
// import { AnimationOnScroll } from "react-scroll-animation";
import Grid from "@mui/material/Grid";
import styleFB from "./FeedBack.module.scss";

export default function FeedBack() {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className={styleFB.feedback}>
        <div className={styleFB.triangleBox}></div>
        <div className={styleFB.dot1Box}></div>
        <div className={styleFB.dot2Box}></div>
        <Grid container spacing={2} className={styleFB.feedback_content}>
          <Grid item md={6} xs={12} className={styleFB.content_left}>
            <div className={styleFB.about}>
              <div className={styleFB.review_Img}>
                <img
                  className={styleFB.bg_img}
                  width={200}
                  height={200}
                  src="https://demo2.cybersoft.edu.vn/static/media/avatarReview.2f5a1f3c.png"
                  alt="logo"
                />
              </div>
            </div>
          </Grid>
          <Grid item md={6} xs={12} className={styleFB.content_right}>
            <div>
              <div className={styleFB.blockquote}>
                <p className={styleFB.fz}>
                  <div className={styleFB.zoom}> " </div>Chương trình giảng dạy được biên soạn dành
                  riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao,
                  luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và
                  giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn"
                </p>
                <p className={styleFB.colorp2}>Nhi Dev</p>
                <span className={styleFB.spann}>Học viên xuất sắc</span>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className={styleFB.dot3Box}></div>
        <div className={styleFB.dot4Box}></div>
      </div>
    </Grid>
  );
}
