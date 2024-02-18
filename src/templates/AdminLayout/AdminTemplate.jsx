import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AdminTemplate.scss";
import {
  CodeSandboxOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, message, Dropdown } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";
import favicon from "../../assets/img/favicon.png";
import tempUser from "../../assets/img/home_carousel_01.jpg";
import { removeLocal } from "../../utils/localStorage";
import { getLocalData } from "../../redux/slices/authSlice";
import Loading from "../../components/Loading/Loading";
import { setIsLoading } from "../../redux/slices/loadingSlice";

const { Header, Sider, Content } = Layout;

const AdminTemplate = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 1000);
  }, []);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [admin, setAdmin] = useState({});

  const items = [
    {
      key: "1",
      icon: <SettingOutlined />,
      label: <div>Cài Đặt</div>,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      icon: <LogoutOutlined />,
      label: (
        <div
          onClick={() => {
            removeLocal("currentUser");
            window.location.href = "/admin/login";
          }}
        >
          Đăng Xuất
        </div>
      ),
    },
  ];

  useEffect(() => {
    const user = getLocalData("currentUser");
    if (user && user.maLoaiNguoiDung === "GV") {
      setAdmin(user);
      message.success(`Chào mừng Admin - ${user.hoTen} đã quay lại!`);
    } else {
      removeLocal("currentUser");
      window.location.href = "/admin/login";
    }
  }, []);

  return (
    <Fragment>
      {isLoading ? <Loading /> : <></>}
      <Layout id="admin__template" className="min-h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            className="sticky top-0"
            items={[
              {
                key: "0",
                icon: (
                  <img src={favicon} alt="Favicon" className={`${collapsed ? "w-20" : "w-10"}`} />
                ),
                label: (
                  <NavLink to="/" className="text-sm text-black" target="_blank">
                    Cyber E-Learning
                  </NavLink>
                ),
              },
              {
                key: "1",
                icon: <TeamOutlined />,
                label: <NavLink to="/admin">Người dùng</NavLink>,
              },
              {
                key: "2",
                icon: <CodeSandboxOutlined />,
                label: <NavLink to="/admin/course">Khóa học</NavLink>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
            className="flex items-center justify-between"
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
              trigger={"click"}
            >
              <div className="flex items-center justify-center cursor-pointer group">
                <p>
                  Chào!{" "}
                  <span className="font-bold uppercase duration-300 group-hover:text-orange-400">
                    {admin.hoTen}
                  </span>
                </p>
                <div className="ms-2 me-4">
                  <img
                    src={tempUser}
                    alt="User Logo"
                    className="object-cover w-10 h-10 duration-300 rounded-full group-hover:shadow-lg"
                  />
                </div>
              </div>
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: "right",
            }}
            className="py-3 bg-white"
          >
            Cyber E-Learning © 2023. All Rights Reserved.
          </Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default AdminTemplate;
