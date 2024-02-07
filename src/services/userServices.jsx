import { https } from "./config";

export const userService = {
  getUserTypes: () => {
    return https.get("/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  },
  login: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  register: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", data);
  },
  userInfo: () => {
    return https.post("/api/QuanLyNguoiDung/ThongTinNguoiDung");
  },
  getAllUsers: (tuKhoa = "", maNhom = "GP09") => {
    if (tuKhoa.trim() !== "") {
      return https.get(
        `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}&tuKhoa=${tuKhoa}`
      );
    }
    return https.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`
    );
  },
  getUsersPagination: (
    tuKhoa = "",
    maNhom = "GP09",
    page = 1,
    pageSize = 10
  ) => {
    if (tuKhoa.trim() !== "") {
      return https.get(
        `/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${maNhom}&tuKhoa=${tuKhoa}&page=${page}&pageSize=${pageSize}`
      );
    }
    return https.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${maNhom}&page=${page}&pageSize=${pageSize}`
    );
  },
  searchUsers: (tuKhoa = "", maNhom = "GP09") => {
    if (tuKhoa.trim() !== "") {
      return https.get(
        `/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${maNhom}&tuKhoa=${tuKhoa}`
      );
    }
    return https.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${maNhom}`);
  },
  accountInfo: () => {
    return https.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  },
  addUsers: (data) => {
    return https.post("/api/QuanLyNguoiDung/ThemNguoiDung", data);
  },
  updateUsers: (data) => {
    return https.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  },
  deleteUsers: (taiKhoan) => {
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  getUnregisteredCourses: (taiKhoan) => {
    return https.post(
      `/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`
    );
  },
  getPendingCourses: (taiKhoan) => {
    return https.post(
      "/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet",
      taiKhoan
    );
  },
  getApprovedCourses: (taiKhoan) => {
    return https.post(
      "/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet",
      taiKhoan
    );
  },
  getUnregisteredUsers: (maKhoaHoc) => {
    return https.post(
      "/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
      maKhoaHoc
    );
  },
  getPendingUsers: (maKhoaHoc) => {
    return https.post(
      "/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet",
      maKhoaHoc
    );
  },
  getCourseUsers: (maKhoaHoc) => {
    return https.post(
      "/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc",
      maKhoaHoc
    );
  },
};
