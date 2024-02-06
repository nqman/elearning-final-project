import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/slices/authSlice";
import coursesSlice from "./redux/slices/coursesSlice";
import loadingSlice from "./redux/slices/loadingSlice";
import navbarSlice from "./redux/slices/navbarSlice";
import userSlice from "./redux/slices/userSlice";
// Tạo reducer

const store = configureStore({
  reducer: {
    user: userSlice,
    loading: loadingSlice,
    auth: authReducer,
    course: coursesSlice,
    navbar: navbarSlice,
  },
});
const state = store.getState();
export default store;
