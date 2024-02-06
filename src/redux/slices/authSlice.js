import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signinAPI } from "../../apis/userAPI";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const data = await signinAPI(credentials);
  // Lưu thông tin đăng nhập vào localStorage
  localStorage.setItem("currentUser", JSON.stringify(credentials));
  console.log(data);
  return data;
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
    isLoading: false,
    error: null,
  },
  reducers: {
    // xử lý logout
    logout: (state) => {
      localStorage.removeItem("currentUser");
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      return { ...state, isLoading: true, error: null };
    });

    builder.addCase(login.fulfilled, (state, action) => {
      return { ...state, isLoading: false, currentUser: action.payload };
    });
    builder.addCase(login.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.error.message };
    });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
