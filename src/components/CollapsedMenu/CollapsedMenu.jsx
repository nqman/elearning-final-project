import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Divider, Drawer, Menu } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setNavbarActive } from "../../redux/slices/navbarSlice";
import "./CollapsedMenu.scss";
import { setPagination } from "../../redux/slices/coursesSlice";
import favicon from "../../assets/img/favicon.png";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const CollapsedMenu = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    getItem(
      <NavLink
        to="/"
        onClick={() => {
          dispatch(setNavbarActive(false));
        }}
        style={({ isActive }) => (isActive ? { color: "#1e90ff" } : {})}
      >
        Trang chủ
      </NavLink>,
      "1",
      null
    ),
    getItem(
      <NavLink
        to="/intro"
        onClick={() => {
          dispatch(setNavbarActive(false));
        }}
        style={({ isActive }) => (isActive ? { color: "#1e90ff" } : {})}
      >
        Thông tin
      </NavLink>,
      "2",
      null
    ),
    getItem("Danh mục", "3", null, [
      getItem(
        <NavLink
          to="/category/TuDuy"
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
          style={({ isActive }) => (isActive ? { color: "#1e90ff" } : {})}
        >
          Tư Duy Lập Trình
        </NavLink>,
        "3-1",
        null
      ),
      getItem(
        <NavLink
          to="/category/DiDong"
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
          style={({ isActive }) => (isActive ? { color: "#1e90ff" } : {})}
        >
          Lập Trình Mobile
        </NavLink>,
        "3-2",
        null
      ),
      getItem(
        <NavLink
          to="/category/Design"
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
          style={({ isActive }) => (isActive ? { color: "#1e90ff" } : {})}
        >
          Thiết Kế Website
        </NavLink>,
        "3-3",
        null
      ),
      getItem(
        <NavLink
          to="/category/FrontEnd"
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
          style={({ isActive }) => (isActive ? { color: "#1e90ff" } : {})}
        >
          Lập Trình Front-end
        </NavLink>,
        "3-4",
        null
      ),
      getItem(
        <NavLink
          to="/category/BackEnd"
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
          style={({ isActive }) => (isActive ? { color: "#1e90ff" } : {})}
        >
          Lập Trình Back-end
        </NavLink>,
        "3-5",
        null
      ),
      getItem(
        <NavLink
          to="/category/FullStack"
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
          style={({ isActive }) => (isActive ? { color: "#1e90ff" } : {})}
        >
          Lập Trình Fullstack
        </NavLink>,
        "3-6",
        null
      ),
    ]),
    getItem(
      <NavLink
        to="/course"
        onClick={() => {
          dispatch(setNavbarActive(false));
        }}
        style={({ isActive }) => (isActive ? { color: "#1e90ff" } : {})}
      >
        Khóa Học
      </NavLink>,
      "4",
      null
    ),
    getItem(
      <NavLink
        to="/blog"
        onClick={() => {
          dispatch(setNavbarActive(false));
        }}
        style={({ isActive }) => (isActive ? { color: "#1e90ff" } : {})}
      >
        Blog
      </NavLink>,
      "5",
      null
    ),
    getItem(
      <NavLink
        to="/event"
        onClick={() => {
          dispatch(setNavbarActive(false));
        }}
        style={({ isActive }) => (isActive ? { color: "#1e90ff" } : {})}
      >
        Sự kiện
      </NavLink>,
      "6",
      null
    ),
  ];

  const handleOnFocus = (e) => {
    e.target.select();
  };

  const searchCourse = (e, searchKey) => {
    if ((e.code === "Enter" || e.code === 13) && e.target.value) {
      navigate(`/search/${e.target.value}`);
      e.target.value = "";
      dispatch(setPagination(1));
      setOpen(false);
      window.scrollTo(0, 0);
    }
    if (e.code === "SearchIcon" && searchKey) {
      navigate(`/search/${searchKey}`);
      dispatch(setPagination(1));
      setOpen(false);
      window.scrollTo(0, 0);
    }
  };

  const clickSearch = () => {
    const searchKey = document.getElementById("collapsedSearch").value;
    const e = {
      code: "SearchIcon",
    };
    searchCourse(e, searchKey);
    document.getElementById("collapsedSearch").value = "";
  };

  return (
    <>
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
        onClick={showDrawer}
      >
        <MenuOutlined />
      </button>
      <Drawer
        title={
          <div className="flex items-center">
            <img src={favicon} alt="Favicon" className="hidden w-20 sm:block" />
            <div>
              <p>Cyber E-Learning</p>
              <p className="text-sm text-orange-400">The Best Online Education</p>
            </div>
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="relative block mx-2 mb-6 duration-500 border-b-2 border-b-gray-400 pe-3 focus-within:border-b-orange-400 group md:hidden">
              <input
                id="collapsedSearch"
                type="text"
                placeholder="Input search course here..."
                onFocus={handleOnFocus}
                onKeyDown={searchCourse}
                className="w-full p-2 outline-none xl:w-32 lg:w-56"
              />
              <SearchOutlined
                className="absolute text-gray-300 duration-500 -translate-y-1/2 right-2 top-1/2 group-focus-within:text-black hover:scale-150 hover:text-black"
                onClick={clickSearch}
              />
            </div>
            <Menu
              id="collapsedMenu"
              onClick={onClose}
              style={{
                width: "100%",
              }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </div>
          <div>
            <Divider />
            <div className="flex items-center justify-between">
              <p>CyberSoft © 2023 by BCS07 - G9</p>
              <div>
                <NavLink to="https://www.facebook.com/lophocviet/" target="_blank">
                  <i className="text-gray-500 duration-300 cursor-pointer fa-brands fa-facebook-f hover:text-blue-500 ms-2"></i>
                </NavLink>
                <NavLink
                  to="https://github.com/hqbao000101/BCS07_FINAL_G9_ELearning.git"
                  target="_blank"
                >
                  <i className="text-gray-500 duration-300 cursor-pointer fa-brands fa-github hover:text-black ms-2"></i>
                </NavLink>
                <NavLink
                  to="https://www.youtube.com/channel/UCQDXgEguMerxvCh_2dcxmtQ"
                  target="_blank"
                >
                  <i className="text-gray-500 duration-300 cursor-pointer fa-brands fa-youtube hover:text-red-500 ms-2"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CollapsedMenu;
