import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Drawer, Popconfirm, Table, message } from "antd";
import "./AdminCourse.scss";
import { DeleteFilled, EditFilled, QuestionCircleOutlined, SettingFilled } from "@ant-design/icons";
import ReactSample from "../../../assets/img/card_react_sample.jpg";
import { NavLink } from "react-router-dom";
import { courseService } from "../../../apis/courseAPI";
import DrawerAddCourse from "../DrawerAddCourse/DrawerAddCourse";
import DrawerUpdateCourse from "../DrawerUpdateCourse/DrawerUpdateCourse";
import { getAllCourses, setSelectedCourse } from "../../../redux/slices/coursesSlice";
const AdminCourse = () => {
  const courses = useSelector((state) => state.course.courses);
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    dispatch(getAllCourses());
  }, []);
  const showDrawer = () => {
    setAdd(true);
  };

  const onClose = () => {
    setAdd(false);
  };

  const showUpdateDrawer = () => {
    setUpdate(true);
  };

  const onUpdateClose = () => {
    setUpdate(false);
  };

  const deleteConfirm = (maKhoaHoc) => {
    courseService
      .deleteCourses(maKhoaHoc)
      .then(() => {
        const searchInput = document.getElementById("course__search").value;
        message.success("Xóa khóa học thành công!");
        searchInput ? dispatch(getAllCourses(searchInput)) : dispatch(getAllCourses());
      })
      .catch((err) => {
        message.error(`${err ? err.response.data : "Không tìm thấy khóa học này!"}`);
      });
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      align: "center",
    },
    {
      title: "Mã Khóa Học",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
      align: "center",
    },
    {
      title: "Tên Khóa Học",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
      align: "center",
      width: 150,
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      width: 250,
      align: "center",
      render: (text) => (
        <img
          src={text}
          alt="Course Pic"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = ReactSample;
          }}
          className="object-cover w-4/5 mx-auto h-28"
        />
      ),
    },
    {
      title: <p className="text-center">Mô Tả</p>,
      dataIndex: "moTa",
      key: "moTa",
      width: 300,
      render: (text) => <p className="line-clamp-3">{text}</p>,
    },
    {
      title: "Người Tạo",
      key: "nguoiTao",
      dataIndex: "nguoiTao",
      align: "center",
      render: (_, record) => <p>{record.nguoiTao.hoTen}</p>,
    },
    {
      title: "Ngày Tạo",
      key: "ngayTao",
      dataIndex: "ngayTao",
      align: "center",
    },
    {
      title: "Danh Sách",
      key: "danhSach",
      align: "center",
      render: () => (
        <NavLink to="/admin/enroll" className="italic text-blue-400 hover:underline">
          Các Học Viên Ghi Danh
        </NavLink>
      ),
    },
    {
      title: <SettingFilled />,
      key: "Action",
      align: "center",
      render: (_, record) => (
        <div className="flex items-center justify-center gap-2">
          <button
            className="px-3 py-2 text-white duration-300 bg-yellow-400 rounded-md hover:bg-yellow-500"
            onClick={() => {
              showUpdateDrawer();
              dispatch(setSelectedCourse(record));
            }}
          >
            <EditFilled />
          </button>
          <Popconfirm
            title="Xóa Khóa Học"
            description={
              <>
                <p>Bạn có chắc muốn xóa khóa học này?</p>
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
            onConfirm={() => deleteConfirm(record.maKhoaHoc)}
          >
            <button className="px-3 py-2 text-white duration-300 bg-red-500 rounded-md hover:bg-red-600">
              <DeleteFilled />
            </button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  const data = courses.map((item, index) => {
    return {
      ...item,
      stt: index + 1,
    };
  });

  return (
    <div id="admin__course">
      <div className="mb-5 text-3xl font-semibold uppercase">
        Quản Lý <span className="text-orange-400">Khóa Học</span>
      </div>
      <div className="flex items-center justify-between mb-5">
        <button
          className="px-3 py-2 text-white duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
          onClick={showDrawer}
        >
          Thêm khóa học
        </button>
        <input
          id="course__search"
          type="text"
          placeholder="Tìm kiếm khóa học..."
          onChange={(e) => {
            dispatch(getAllCourses(e.target.value));
          }}
          className="w-1/3 p-2 duration-300 border-2 rounded-tl-lg rounded-tr-lg outline-none focus:border-b-main"
          onFocus={(e) => {
            e.target.select();
          }}
        />
      </div>
      <Drawer title="Thêm Khóa Học" placement="right" onClose={onClose} open={add} size="large">
        <DrawerAddCourse
          setClose={() => {
            onClose();
          }}
        />
      </Drawer>
      <Drawer
        title="Cập Nhật Khóa Học"
        placement="right"
        onClose={onUpdateClose}
        open={update}
        size="large"
      >
        <DrawerUpdateCourse
          setClose={() => {
            onUpdateClose();
          }}
        />
      </Drawer>
      <Table
        rowKey={"stt"}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1400 }}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default AdminCourse;
