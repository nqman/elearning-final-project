import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavbarActive: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { setNavbarActive } = navbarSlice.actions;
export default navbarSlice.reducer;
