import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/slices/authSlice";
import coursesSlice from "./redux/slices/coursesSlice";
import loadingSlice from "./redux/slices/loadingSlice";

// Tạo reducer

const store = configureStore({
  reducer: {
    loading: loadingSlice,
    auth: authReducer,
    course: coursesSlice,
  },
});
const state = store.getState();
export default store;
