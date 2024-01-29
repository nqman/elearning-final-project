import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./module/auth/slices/authSlice";
import coursesSlice from "./module/auth/slices/coursesSlice";

// Tạo reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: coursesSlice,
  },
});
const state = store.getState();
export default store;
