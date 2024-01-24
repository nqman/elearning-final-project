import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./module/auth/slices/authSlice";

// Tạo reducer
const movieTicketState = {
  selectedSeats: [],
  totalPrice: 0,
  bookedSeats: [],
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
const state = store.getState();
export default store;
