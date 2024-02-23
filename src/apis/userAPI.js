import baseAPI from "./baseAPI";

export async function signinAPI(credentials) {
  try {
    const resp = await baseAPI.post("/quanlynguoidung/dangnhap", credentials);
    return resp.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data?.content;
    }
    throw error.message;
  }
}

export async function signupAPI(credentials) {
  try {
    const resp = await baseAPI.post("/quanlynguoidung/dangky", credentials);
    return resp.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data?.content;
    }
    throw error.message;
  }
}

export const getUserList = async (tuKhoa) => {
  try {
    const response = await baseAPI.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: {
        maNhom: "GP09",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data?.content;
  }
};
