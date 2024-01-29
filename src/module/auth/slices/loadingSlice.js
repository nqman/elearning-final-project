import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    set_loading_start: (state, action) => {
      state.isLoading = true;
    },
    set_loading_end: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { set_loading_start, set_loading_end } = loadingSlice.actions;
export default loadingSlice.reducer;
