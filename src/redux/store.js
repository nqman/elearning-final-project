import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import coursesSlice from "./slices/coursesSlice";
import loadingSlice from "./slices/loadingSlice";
import navbarSlice from "./slices/navbarSlice";
import userSlice from "./slices/userSlice";
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
export default store;
