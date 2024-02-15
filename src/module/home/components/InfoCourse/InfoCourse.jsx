import React, { useState } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import "./InfoCourse.scss";
import Lottie from "react-lottie";
import * as animationNoData from "../../../../assets/animation/no_data.json";
import HorizonCard from "../Horizon/HorizonCard";
import { getAccountInfo } from "../../../../redux/slices/userSlice";
import removeAccents from "../../../../utils/removeAccent";

const { Search } = Input;

const InfoCourse = () => {
  const accountInfo = useSelector((state) => state.user.accountInfo);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [key, setKey] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationNoData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const onSearch = async (value) => {
    await dispatch(getAccountInfo());
    const newList = accountInfo.chiTietKhoaHocGhiDanh?.filter((item) =>
      removeAccents(item.tenKhoaHoc).includes(removeAccents(value))
    );
    setKey(value);
    setList(newList);
  };

  const onChange = (e) => {
    if (e.target.value === "") {
      setKey(e.target.value);
      setList([]);
    }
  };

  return (
    <div id="info__course">
      <div className="flex items-center justify-between pb-2 mb-5 border-b-2 border-orange-400">
        <h2 className="flex w-1/2 text-base font-semibold text-orange-400 uppercase sm:w-2/3 sm:text-xl">
          <span className="min-[400px]:block hidden me-1">Danh Sách</span>Ghi Danh
        </h2>
        <div className="w-1/2 sm:w-1/3">
          <Search
            className="flex items-center"
            placeholder="Tìm kiếm khóa học..."
            onSearch={onSearch}
            onChange={onChange}
          />
        </div>
      </div>
      {list.length === 0 && key === "" ? (
        accountInfo.chiTietKhoaHocGhiDanh?.length === 0 ? (
          <div>
            <p className="text-lg">Bạn chưa ghi danh khóa học nào!</p>
            <Lottie options={defaultOptions} width={"80%"} />
          </div>
        ) : (
          accountInfo.chiTietKhoaHocGhiDanh?.map((item, index) => {
            return <HorizonCard item={item} flag={true} key={index} />;
          })
        )
      ) : (
        list.map((item, index) => {
          return (
            <HorizonCard
              item={item}
              flag={true}
              key={index}
              index={index}
              list={list}
              setList={setList}
            />
          );
        })
      )}
      {(list.length === 0 && key === "") || (list.length !== 0 && key !== "") ? (
        accountInfo.chiTietKhoaHocGhiDanh?.length !== 0 ? (
          <div className="text-right">
            <Pagination
              defaultCurrent={1}
              total={accountInfo.chiTietKhoaHocGhiDanh?.length}
              pageSize={10}
            />
          </div>
        ) : (
          <></>
        )
      ) : (
        <div>
          <p className="text-lg">Không tìm thấy khóa học liên quan!</p>
          <Lottie options={defaultOptions} width={"80%"} />
        </div>
      )}
    </div>
  );
};

export default InfoCourse;
