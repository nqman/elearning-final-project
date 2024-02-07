import { https } from "./config";

export const courseService = {
  getAllCourses: (tenKhoaHoc = "", maNhom = "GP09") => {
    if (tenKhoaHoc.trim() !== "") {
      return https.get(
        `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${maNhom}`
      );
    }
    return https.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`);
  },
  getCourseCategories: (tenDanhMuc = "") => {
    if (tenDanhMuc.trim() !== "") {
      return https.get(
        `/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc?tenDanhMuc=${tenDanhMuc}`
      );
    }
    return https.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
  getCoursesByCategory: (maDanhMuc = "", maNhom = "GP09") => {
    if (maDanhMuc.trim() !== "") {
      return https.get(
        `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${maNhom}`
      );
    }
    return https.get(
      `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?MaNhom=${maNhom}`
    );
  },
  getCoursesPagination: (
    tenKhoaHoc = "",
    page = 1,
    pageSize = 10,
    maNhom = "GP09"
  ) => {
    if (tenKhoaHoc.trim() !== "") {
      return https.get(
        `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?tenKhoaHoc=${tenKhoaHoc}&page=${page}&pageSize=${pageSize}&MaNhom=${maNhom}`
      );
    }
    return https.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${pageSize}&MaNhom=${maNhom}`
    );
  },
  getCourseInfo: (maKhoaHoc) => {
    return https.get(
      `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    );
  },
  getStudentsByCourse: (maKhoaHoc) => {
    return https.get(
      `/api/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    );
  },
  addCourses: (data) => {
    return https.post("/api/QuanLyKhoaHoc/ThemKhoaHoc", data);
  },
  updateCourses: (data) => {
    return https.put("/api/QuanLyKhoaHoc/CapNhatKhoaHoc", data);
  },
  deleteCourses: (maKhoaHoc) => {
    return https.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`);
  },
  registerCourses: (data) => {
    return https.post("/api/QuanLyKhoaHoc/DangKyKhoaHoc", data);
  },
  unRegisterCourses: (data) => {
    return https.post("/api/QuanLyKhoaHoc/HuyGhiDanh", data);
  },
  updateCoursesUploadImg: (formData) => {
    return https.post("/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload", formData);
  },
  addCoursesUploadImg: (formData) => {
    return https.post("/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh", formData);
  },
  uploadCourseImg: (formData) => {
    return https.post("/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc", formData);
  },
};
