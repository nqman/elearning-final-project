import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { signinAPI } from "../../apis/userAPI";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const data = await signinAPI(credentials);
  localStorage.setItem("currentUser", JSON.stringify(data));
  return data;
});

export const getLocalData = () => {
  return JSON.parse(localStorage.getItem("currentUser")) || null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: getLocalData(),
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
// Tạo selector để truy cập giá trị currentUser
export const selectCurrentUser = createSelector(
  (state) => state.auth.currentUser,
  (currentUser) => currentUser
);
export const { logout } = authSlice.actions;
export default authSlice.reducer;
