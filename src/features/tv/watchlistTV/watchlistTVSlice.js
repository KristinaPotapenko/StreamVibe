import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPaginatedTMDB } from "../../fetchPaginatedTMDB";

export const getWatchlistTV = createAsyncThunk(
  "watchlistTV/getWatchlistTV",
  async (page = null, thunkAPI) => {
    const sessionId = localStorage.getItem("sessionId");

    try {
      const { results, totalPages } = await fetchPaginatedTMDB({
        endpoint: "watchlist/tv",
        sessionId,
        singlePage: page,
      });

      return {
        watchlistTV: results,
        pagesCount: totalPages,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const watchlistTV = createSlice({
  name: "watchlistTV",
  initialState: {
    watchlistTV: [],
    pagesCount: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getWatchlistTV.fulfilled, (state, { payload }) => {
      const { watchlistTV, pagesCount } = payload;

      state.watchlistTV = watchlistTV;
      state.pagesCount = pagesCount;
    });
  },
});

export default watchlistTV.reducer;
