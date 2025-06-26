import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPaginatedTMDB } from "../../fetchPaginatedTMDB";
import { setError, setLoading } from "../../appStatusSlice";

export const getWatchlistMovies = createAsyncThunk(
  "watchlistMovies/getWatchlistMovies",
  async (page = null, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    const sessionId = localStorage.getItem("sessionId");

    try {
      const { results, totalPages } = await fetchPaginatedTMDB({
        endpoint: "watchlist/movies",
        sessionId,
        singlePage: page,
      });

      return {
        watchlistMovies: results,
        pagesCount: totalPages,
      };
    } catch (error) {
      dispatch(
        setError(error.response?.data?.status_message || "Request failed")
      );
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

const watchlistMovies = createSlice({
  name: "watchlistMovies",
  initialState: {
    watchlistMovies: [],
    pagesCount: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getWatchlistMovies.fulfilled, (state, { payload }) => {
      const { watchlistMovies, pagesCount } = payload;

      state.watchlistMovies = watchlistMovies;
      state.pagesCount = pagesCount;
    });
  },
});

export default watchlistMovies.reducer;
