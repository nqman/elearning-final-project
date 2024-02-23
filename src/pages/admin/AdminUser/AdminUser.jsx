import React, { useEffect, useState } from "react";
import { Drawer, Popconfirm, Space, Table, Tag, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, setSearchUser, setSelectedUser } from "../../../redux/slices/userSlice";
import { QuestionCircleOutlined, SettingFilled } from "@ant-design/icons";
import "./AdminUser.scss";
import { userService } from "../../../services/userServices";
import { NavLink } from "react-router-dom";
import DrawerUpdateUser from "../DrawerUpdateUser/DrawerUpdateUser";
import { getLocalData } from "../../../redux/slices/authSlice";
import DrawerAddUsers from "../DrawerAddUser/DrawerAddUsers";

const AdminUser = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);

  const showDrawer = () => {
    setAdd(true);
  };
  const onClose = () => {
    setAdd(false);
  };

  const showUpdateDrawer = (user) => {
    dispatch(setSelectedUser(user));
    setUpdate(true);
  };
  const onCloseUpdate = () => {
    setUpdate(false);
  };

  const deleteConfirm = (taiKhoan) => {
    userService
      .deleteUsers(taiKhoan)
      .then(() => {
        const searchInput = document.getElementById("user__search").value;
        message.success("Xóa người dùng thành công!");
        searchInput ? dispatch(getAllUsers(searchInput)) : dispatch(getAllUsers());
      })
      .catch((err) => {
        message.error(`${err ? err.response.data : "Không tìm thấy tài khoản này!"}`);
      });
  };

  useEffect(() => {
    const localUser = getLocalData("currentUser");
    if (localUser) {
      dispatch(getAllUsers());
    } else {
      window.location.href = "/admin/login";
    }
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      align: "center",
    },
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      render: (text) => <>{text ? text : "UNKNOWN"}</>,
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Địa Chỉ Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDt",
      key: "soDt",
      align: "center",
    },
    {
      title: "Danh Sách",
      key: "danhSach",
      align: "center",
      render: () => (
        <NavLink to="/admin/enroll" className="italic text-blue-400 hover:underline">
          Các Khóa Học Ghi Danh
        </NavLink>
      ),
    },
    {
      title: "Người Dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      align: "center",
      render: (_, { maLoaiNguoiDung }, index) => (
        <div key={index}>
          <Tag color={maLoaiNguoiDung === "HV" ? "blue" : "volcano"}>
            {maLoaiNguoiDung === "HV" ? "Học Viên" : "Giáo Vụ"}
          </Tag>
        </div>
      ),
    },
    {
      title: <SettingFilled />,
      key: "action",
      align: "center",
      render: (_, record) => (
        <>
          {record.taiKhoan ? (
            <Space size="small">
              <button
                className="px-3 py-2 text-white duration-300 bg-orange-400 rounded-lg hover:bg-orange-500"
                onClick={() => {
                  showUpdateDrawer(record);
                }}
              >
                Chỉnh sửa
              </button>
              <Popconfirm
                title="Xóa Người Dùng"
                description={
                  <>
                    <p>Bạn có chắc muốn xóa người dùng này?</p>
                    <p>Hành động sẽ không được hoàn tác!</p>
                  </>
                }
                icon={
                  <QuestionCircleOutlined
                    style={{
                      color: "red",
                    }}
                  />
                }
                okType="danger"
                placement="topRight"
                cancelText="Hủy"
                okText="Xóa"
                onConfirm={() => deleteConfirm(record.taiKhoan)}
              >
                <button className="px-3 py-2 text-white duration-300 bg-red-500 rounded-lg hover:bg-red-600">
                  Xóa
                </button>
              </Popconfirm>
            </Space>
          ) : (
            <></>
          )}
        </>
      ),
    },
  ];

  const data = users.map((item, index) => {
    return {
      ...item,
      stt: index + 1,
    };
  });

  const handleSearchUser = (e) => {
    userService
      .searchUsers(e.target.value)
      .then((res) => {
        dispatch(setSearchUser(res.data));
      })
      .catch(() => {
        message.error("Không thể tìm kiếm người dùng!");
      });
  };

  return (
    <div id="admin__user--table">
      <div className="mb-5 text-3xl font-semibold uppercase">
        Quản Lý <span className="text-orange-400">Người dùng</span>
      </div>
      <div className="flex items-center justify-between mb-5">
        <button
          className="px-3 py-2 text-white duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
          onClick={showDrawer}
        >
          Thêm người dùng
        </button>
        <input
          id="user__search"
          type="text"
          placeholder="Tìm kiếm người dùng..."
          onChange={handleSearchUser}
          className="w-1/3 p-2 duration-300 border-2 rounded-tl-lg rounded-tr-lg outline-none focus:border-b-main"
          onFocus={(e) => {
            e.target.select();
          }}
        />
      </div>
      <Table
        rowKey="stt"
        columns={columns}
        dataSource={data}
        scroll={{ x: 1280 }}
        pagination={{ pageSize: 7 }}
      />
      <Drawer title="Thêm Người Dùng" placement="right" onClose={onClose} open={add}>
        <DrawerAddUsers
          setClose={() => {
            onClose();
          }}
        />
      </Drawer>
      <Drawer title="Cập Nhật Người Dùng" placement="right" onClose={onCloseUpdate} open={update}>
        <DrawerUpdateUser
          setClose={() => {
            onCloseUpdate();
          }}
        />
      </Drawer>
    </div>
  );
};

export default AdminUser;
