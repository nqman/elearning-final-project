import { Grid } from "@mui/material";
import React from "react";
import style from "./Footer.module.scss";
import { FaChevronRight } from "react-icons/fa";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <div>
      <Grid container className={style.extraFooter}>
        <Grid item xs={12} md={4}>
          <div className={style.logoContainer}>
            <div className={style.textLogo}>
              <span className={style.textE}>V</span>learning
              <i className={style.iconLogo}>
                <KeyboardIcon />
              </i>
            </div>
          </div>
          <div className={style.menuFooter}>
            <ul>
              <li>
                <p>
                  <FaPhoneAlt className={style.iconSize} />
                  1800-123-4567
                </p>
              </li>

              <li>
                <span>
                  <IoMail className={style.iconSize} />
                  devit@gmail.com
                </span>
              </li>
              <li>
                <FaLocationDot className={style.iconSize} />
                <span>Đà Nẵng</span>
              </li>
            </ul>
          </div>
        </Grid>

        {/* Liên kết */}
        <Grid item xs={6} md={2}>
          <div>
            <h4 className={style.textFooterTitle}>Liên kết</h4>
            <div className={style.menuFooter}>
              <ul>
                <li>
                  <FaChevronRight /> Home
                </li>
                <li>
                  <FaChevronRight /> Service
                </li>
                <li>
                  <FaChevronRight /> Group
                </li>
                <li>
                  <FaChevronRight /> Blog
                </li>
              </ul>
            </div>
          </div>
        </Grid>

        {/* Khóa học */}
        <Grid item xs={6} md={2}>
          <div>
            <h4 className={style.textFooterTitle}>Khóa học</h4>
            <div className={style.menuFooter}>
              <ul>
                <li>
                  <FaChevronRight /> Front End
                </li>
                <li>
                  <FaChevronRight /> Back End
                </li>
                <li>
                  <FaChevronRight /> Full stack
                </li>
                <li>
                  <FaChevronRight /> Node Js
                </li>
              </ul>
            </div>
          </div>
        </Grid>

        {/* Đăng kí tư vấn */}
        <Grid item xs={12} md={4}>
          <h4 className={style.textFooterTitle}>Đăng kí tư vấn</h4>
          <form className={style.formFooter}>
            <input type="text" className="form-control mb-2" placeholder="Họ và tên *" required />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Email liên hệ *"
              required
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Điện thoại liên hệ *"
              required
            />
            <div className="mt-2">
              <button className="btn btn-warning">ĐĂNG KÝ</button>
            </div>
          </form>
        </Grid>
      </Grid>

      <Grid className={style.extraFooters}>
        <Grid item xs={12} md={4}>
          <p>Copyright © 2021. All rights reserved.</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <InstagramIcon className={style.iconSize} />
          <FacebookIcon className={style.iconSize} />
          <TwitterIcon className={style.iconSize} />
        </Grid>
      </Grid>
    </div>
  );
}
