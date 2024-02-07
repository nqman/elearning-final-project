import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserIn4, getUserList } from "../../apis/userAPI";

const initialState = {
  users: [],
  selectedUser: {},
  accountInfo: {},
};

export const getAllUsers = createAsyncThunk("user/getAllUsers", async (tuKhoa = "") => {
  const res = await getUserList(tuKhoa);
  return res.data;
});

export const getAccountInfo = createAsyncThunk("user/getAccountInfo", async () => {
  const res = await getUserIn4();
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      if (state.loggedUser === "") {
        state.loggedUser = action.payload;
      }
    },
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

export const { setLoggedUser, setSelectedUser, setSearchUser } = userSlice.actions;
export default userSlice.reducer;
