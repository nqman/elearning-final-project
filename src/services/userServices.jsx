import baseAPI from "../apis/baseAPI";

export const userService = {
  getUserTypes: () => {
    return baseAPI.get("/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  },
  login: (data) => {
    return baseAPI.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  register: (data) => {
    return baseAPI.post("/api/QuanLyNguoiDung/DangKy", data);
  },
  userInfo: () => {
    return baseAPI.post("/QuanLyNguoiDung/ThongTinNguoiDung");
  },
  getAllUsers: (tuKhoa = "", maNhom = "GP09") => {
    if (tuKhoa.trim() !== "") {
      return baseAPI.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}&tuKhoa=${tuKhoa}`);
    }
    return baseAPI.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`);
  },
  getUsersPagination: (tuKhoa = "", maNhom = "GP09", page = 1, pageSize = 10) => {
    if (tuKhoa.trim() !== "") {
      return baseAPI.get(
        `/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${maNhom}&tuKhoa=${tuKhoa}&page=${page}&pageSize=${pageSize}`
      );
    }
    return baseAPI.get(
      `/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${maNhom}&page=${page}&pageSize=${pageSize}`
    );
  },
  searchUsers: (tuKhoa = "", maNhom = "GP09") => {
    if (tuKhoa.trim() !== "") {
      return baseAPI.get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${maNhom}&tuKhoa=${tuKhoa}`);
    }
    return baseAPI.get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${maNhom}`);
  },
  accountInfo: () => {
    return baseAPI.post("/QuanLyNguoiDung/ThongTinTaiKhoan");
  },
  addUsers: (data) => {
    return baseAPI.post("/QuanLyNguoiDung/ThemNguoiDung", data);
  },
  updateUsers: (data) => {
    return baseAPI.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  },
  deleteUsers: (taiKhoan) => {
    return baseAPI.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
  },
  getUnregisteredCourses: (taiKhoan) => {
    return baseAPI.post(`/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`);
  },
  getPendingCourses: (taiKhoan) => {
    return baseAPI.post("/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet", taiKhoan);
  },
  getApprovedCourses: (taiKhoan) => {
    return baseAPI.post("/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet", taiKhoan);
  },
  getUnregisteredUsers: (maKhoaHoc) => {
    return baseAPI.post("/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh", maKhoaHoc);
  },
  getPendingUsers: (maKhoaHoc) => {
    return baseAPI.post("/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet", maKhoaHoc);
  },
  getCourseUsers: (maKhoaHoc) => {
    return baseAPI.post("/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc", maKhoaHoc);
  },
};
