import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  BarsOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  LoginOutlined,
  SearchOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarActive } from "../../redux/slices/navbarSlice";
import CollapsedMenu from "../CollapsedMenu/CollapsedMenu";
import "./Header.scss";
import { setPagination } from "../../redux/slices/coursesSlice";
import favicon from "../../assets/img/favicon.png";
import { removeLocal } from "../../utils/localStorage";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Header = () => {
  const { isActive } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.auth);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const items = [
    {
      key: "1",
      label: (
        <NavLink
          to="/category/TuDuy"
          style={({ isActive }) => (isActive ? { color: "#e40707" } : {})}
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Tư Duy Lập Trình
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          to="/category/DiDong"
          style={({ isActive }) => (isActive ? { color: "#e40707" } : {})}
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Lập Trình Mobile
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <NavLink
          to="/category/Design"
          style={({ isActive }) => (isActive ? { color: "#e40707" } : {})}
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Thiết Kế Website
        </NavLink>
      ),
    },
    {
      key: "4",
      label: (
        <NavLink
          to="/category/FrontEnd"
          style={({ isActive }) => (isActive ? { color: "#e40707" } : {})}
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Lập Trình Front-end
        </NavLink>
      ),
    },
    {
      key: "5",
      label: (
        <NavLink
          to="/category/BackEnd"
          style={({ isActive }) => (isActive ? { color: "#e40707" } : {})}
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Lập Trình Back-end
        </NavLink>
      ),
    },
    {
      key: "6",
      label: (
        <NavLink
          to="/category/FullStack"
          style={({ isActive }) => (isActive ? { color: "#e40707" } : {})}
          onClick={() => {
            dispatch(setNavbarActive(true));
          }}
        >
          Lập Trình Fullstack
        </NavLink>
      ),
    },
  ];

  const userOptions = [
    {
      key: "1",
      label: (
        <div>
          <NavLink
            to="/profile"
            className="flex items-center duration-300 hover:text-orange-400"
            style={({ isActive }) => (isActive ? { color: "#e40707" } : {})}
            onClick={() => {
              dispatch(setNavbarActive(false));
            }}
          >
            <SettingOutlined className="me-2" />
            <span>Tài khoản</span>
          </NavLink>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: (
        <div
          className="flex items-center duration-300 hover:text-orange-400"
          onClick={() => {
            removeLocal("currentUser");
            window.location.href = "/";
          }}
        >
          <LogoutOutlined className="rotate-180 me-2" />
          <p>Đăng xuất</p>
        </div>
      ),
    },
  ];

  const handleOnFocus = (e) => {
    e.target.select();
  };

  const searchCourse = (e, searchKey) => {
    if (e.code === "Enter" && e.target.value) {
      navigate(`/search/${e.target.value}`);
      e.target.value = "";
      dispatch(setPagination(1));
      window.scrollTo(0, 0);
    }
    if (e.code === "SearchIcon" && searchKey) {
      navigate(`/search/${searchKey}`);
      dispatch(setPagination(1));
      window.scrollTo(0, 0);
    }
  };

  const clickSearch = () => {
    const searchKey = document.getElementById("search").value;
    const e = {
      code: "SearchIcon",
    };
    searchCourse(e, searchKey);
    document.getElementById("search").value = "";
  };

  return (
    <header
      className={`${
        scroll >= 400
          ? "top-0 opacity-100 sticky duration-500 visible shadow-md"
          : scroll >= 200
          ? "opacity-0 top-0 sticky invisible"
          : ""
      } z-50`}
    >
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-white">
        <div className="flex items-center justify-between mx-auto max-w-screen-2xl">
          <NavLink
            to="/"
            className="flex items-center group"
            onClick={() => {
              dispatch(setNavbarActive(false));
            }}
          >
            <img src={favicon} className="h-20" alt="Logo" />

            <div>
              <span className="self-center hidden text-xl font-semibold tracking-wide uppercase duration-300 sm:inline-block whitespace-nowrap group-hover:scale-105">
                V-Learning
              </span>
              <p className="items-center justify-center hidden text-xs text-orange-400 uppercase sm:flex"></p>
            </div>
          </NavLink>
          <div className="flex items-center justify-end lg:order-2">
            <div className="relative hidden duration-500 border-b-2 border-b-gray-500 me-3 pe-3 focus-within:border-b-orange-400 group md:block">
              <input
                id="search"
                type="text"
                placeholder="Search course"
                onFocus={handleOnFocus}
                onKeyDown={searchCourse}
                className="w-44 xl:w-32 lg:w-56"
              />
              <SearchOutlined
                className="absolute right-0 text-gray-300 duration-500 -translate-y-1/2 top-1/2 group-focus-within:text-black hover:scale-150 hover:text-black"
                onClick={clickSearch}
              />
            </div>
            {currentUser ? (
              <Dropdown
                menu={{
                  items: userOptions,
                }}
                trigger={["click"]}
                placement="bottomRight"
                arrow={true}
              >
                <div className="flex items-center justify-center p-3 text-white duration-300 bg-orange-400 rounded-full shadow-[2px_2px_5px_#999] hover:bg-orange-500 me-2">
                  <UserOutlined />
                </div>
              </Dropdown>
            ) : (
              <NavLink
                to="/login"
                className="text-white hover:bg-blue-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none bg-blue-700 duration-300 hover:shadow-md flex justify-center items-center"
              >
                {windowSize.innerWidth <= 342 ? <LoginOutlined /> : "Đăng nhập"}
              </NavLink>
            )}
            <CollapsedMenu />
          </div>
          <div
            className="items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 uppercase duration-300 border-b border-gray-100 nav-link  lg:hover:bg-transparent lg:border-0 hover:text-red-500 lg:p-0"
                  style={({ isActive }) => (isActive ? { color: "#e40707" } : {})}
                  onClick={() => {
                    dispatch(setNavbarActive(false));
                  }}
                >
                  Trang chủ
                </NavLink>
              </li>

              <li>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <NavLink
                    className={`flex items-center py-2 pl-3 pr-4 uppercase duration-300 border-b border-gray-100 nav-link hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-red-500 lg:p-0 ${
                      isActive ? "text-orange-400" : ""
                    }`}
                  >
                    <BarsOutlined className="me-2" />
                    Danh mục
                  </NavLink>
                </Dropdown>
              </li>
              <li>
                <NavLink
                  to="/course"
                  className="block py-2 pl-3 pr-4 uppercase duration-300 border-b border-gray-100 nav-link hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-500 lg:p-0"
                  style={({ isActive }) => (isActive ? { color: "#e40707" } : {})}
                  onClick={() => {
                    dispatch(setNavbarActive(false));
                  }}
                >
                  Khóa học
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="block py-2 pl-3 pr-4 uppercase duration-300 border-b border-gray-100 nav-link hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-500 lg:p-0"
                  style={({ isActive }) => (isActive ? { color: "#e40707" } : {})}
                  onClick={() => {
                    dispatch(setNavbarActive(false));
                  }}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/event"
                  className="block py-2 pl-3 pr-4 uppercase duration-300 border-b border-gray-100 nav-link hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-500 lg:p-0"
                  style={({ isActive }) => (isActive ? { color: "#e40707" } : {})}
                  onClick={() => {
                    dispatch(setNavbarActive(false));
                  }}
                >
                  Sự kiện
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
