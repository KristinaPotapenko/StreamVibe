import { createSlice } from "@reduxjs/toolkit";

const appStatus = createSlice({
  name: "appStatus",
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setLoading, setError, clearError } = appStatus.actions;
export default appStatus.reducer;
