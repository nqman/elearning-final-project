import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { courseService } from "../../apis/courseAPI";

const initialState = {
  courses: [],
  selectedCourse: {},
  pagination: 1,
};
export const getAllCourses = createAsyncThunk("course/getAllCourses", async (tenKhoaHoc = "") => {
  const res = await courseService.getAllCourses(tenKhoaHoc);
  return res.data;
});

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
    });
  },
});

export const { setSelectedCourse, setPagination } = courseSlice.actions;
export default courseSlice.reducer;
