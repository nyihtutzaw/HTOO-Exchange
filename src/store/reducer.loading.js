import { createSlice } from "@reduxjs/toolkit";

export const loadingReducer = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = !state.loading;
    },
  },
});

export const { setLoading } = loadingReducer.actions;

export default loadingReducer.reducer;
