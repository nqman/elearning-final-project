import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services/userServices";
const initialState = {
  users: [],
  selectedUser: {},
  accountInfo: {},
};

export const getAllUsers = createAsyncThunk("user/getAllUsers", async (tuKhoa = "") => {
  const res = await userService.getAllUsers(tuKhoa);
  return res.data;
});

export const getAccountInfo = createAsyncThunk("user/getAccountInfo", async () => {
  const res = await userService.accountInfo();

  return res.data;
});
export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setSearchUser: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(getAccountInfo.fulfilled, (state, action) => {
      state.accountInfo = action.payload;
    });
  },
});

export const { setSelectedUser, setSearchUser } = userSlice.actions;
export default userSlice.reducer;
