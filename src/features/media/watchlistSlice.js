import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { account_id, API_KEY, BASE_URL } from "../../utils/constants";

export const addWatchlistMedia = createAsyncThunk(
  "watchlist/addWatchlistMedia",
  async (raw, thunkAPI) => {
    try {
      const session_id = localStorage.getItem("sessionId");

      const response = await axios.request({
        method: "POST",
        url: `${BASE_URL}/3/account/${account_id}/watchlist?session_id=${session_id}`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        data: raw,
      });

      return response.data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const watchlist = createSlice({
  name: "watchlist",
  initialState: { success: false, error: null },
  reducers: {
    resetWatchlistSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addWatchlistMedia.fulfilled, (state, { payload }) => {
        state.success = payload;
      })
      .addCase(addWatchlistMedia.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      });
  },
});

export const { resetWatchlistSuccess } = watchlist.actions;
export default watchlist.reducer;
