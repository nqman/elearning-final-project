import baseAPI from "./baseAPI";

export async function getCategoryCourseAPI() {
  try {
    const resp = await baseAPI.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
    return resp.data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
}
export async function getListCourseAPI() {
  try {
    const resp = await baseAPI.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
    return resp.data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
}

export async function getCoursePaginationAPI(page, pageSize) {
  try {
    const resp = await baseAPI.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang", {
      params: {
        page,
        pageSize,
      },
    });
    return resp.data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
}
