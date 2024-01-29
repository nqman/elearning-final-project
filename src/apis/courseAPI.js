import baseAPI from "./baseAPI";

export const courseService = {
  getAllCourses: (tenKhoaHoc = "", maNhom = "GP09") => {
    if (tenKhoaHoc.trim() !== "") {
      return baseAPI.get(
        `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${maNhom}`
      );
    }
    return baseAPI.get(`/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`);
  },
  getCourseCategories: (tenDanhMuc = "") => {
    if (tenDanhMuc.trim() !== "") {
      return baseAPI.get(`/QuanLyKhoaHoc/LayDanhMucKhoaHoc?tenDanhMuc=${tenDanhMuc}`);
    }
    return baseAPI.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
  getCoursesByCategory: (maDanhMuc = "", maNhom = "GP09") => {
    if (maDanhMuc.trim() !== "") {
      return baseAPI.get(
        `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${maNhom}`
      );
    }
    return baseAPI.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?MaNhom=${maNhom}`);
  },
  getCoursesPagination: (tenKhoaHoc = "", page = 1, pageSize = 10, maNhom = "GP09") => {
    if (tenKhoaHoc.trim() !== "") {
      return baseAPI.get(
        `/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?tenKhoaHoc=${tenKhoaHoc}&page=${page}&pageSize=${pageSize}&MaNhom=${maNhom}`
      );
    }
    return baseAPI.get(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${pageSize}&MaNhom=${maNhom}`
    );
  },
  getCourseInfo: (maKhoaHoc) => {
    return baseAPI.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`);
  },
  getStudentsByCourse: (maKhoaHoc) => {
    return baseAPI.get(`/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc?maKhoaHoc=${maKhoaHoc}`);
  },
  addCourses: (data) => {
    return baseAPI.post("/QuanLyKhoaHoc/ThemKhoaHoc", data);
  },
  updateCourses: (data) => {
    return baseAPI.put("/QuanLyKhoaHoc/CapNhatKhoaHoc", data);
  },
  deleteCourses: (maKhoaHoc) => {
    return baseAPI.delete(`/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`);
  },
  registerCourses: (data) => {
    return baseAPI.post("/QuanLyKhoaHoc/DangKyKhoaHoc", data);
  },
  unRegisterCourses: (data) => {
    return baseAPI.post("/QuanLyKhoaHoc/HuyGhiDanh", data);
  },
  updateCoursesUploadImg: (formData) => {
    return baseAPI.post("/QuanLyKhoaHoc/CapNhatKhoaHocUpload", formData);
  },
  addCoursesUploadImg: (formData) => {
    return baseAPI.post("/QuanLyKhoaHoc/ThemKhoaHocUploadHinh", formData);
  },
  uploadCourseImg: (formData) => {
    return baseAPI.post("/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc", formData);
  },
};
