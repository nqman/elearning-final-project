import { Grid } from "@mui/material";
import React from "react";
import style from "./Footer.module.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Button } from "bootstrap";
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
                <PhoneRoundedIcon className={style.iconSize} />
                <span>1800-123-4567</span>
              </li>

              <li>
                <span>
                  <EmailRoundedIcon className={style.iconSize} />
                  devit@gmail.com
                </span>
              </li>
              <li>
                <LocationOnRoundedIcon className={style.iconSize} />
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
                  <ChevronRightIcon /> Home
                </li>
                <li>
                  <ChevronRightIcon /> Service
                </li>
                <li>
                  <ChevronRightIcon /> Group
                </li>
                <li>
                  <ChevronRightIcon /> Blog
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
                  <ChevronRightIcon /> Front End
                </li>
                <li>
                  <ChevronRightIcon /> Back End
                </li>
                <li>
                  <ChevronRightIcon /> Full stack
                </li>
                <li>
                  <ChevronRightIcon /> Node Js
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
