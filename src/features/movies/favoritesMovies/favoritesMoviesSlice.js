import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPaginatedTMDB } from "../../fetchPaginatedTMDB";
import { setError, setLoading } from "../../appStatusSlice";

export const getFavoritesMovies = createAsyncThunk(
  "favoritesMovies/getFavoritesMovies",
  async (page = null, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    const sessionId = localStorage.getItem("sessionId");

    try {
      const { results, totalPages } = await fetchPaginatedTMDB({
        endpoint: "favorite/movies",
        sessionId,
        singlePage: page,
      });

      return {
        favoritesMovies: results,
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

const favoritesMovies = createSlice({
  name: "favoritesMovies",
  initialState: {
    favoritesMovies: [],
    pagesCount: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getFavoritesMovies.fulfilled, (state, { payload }) => {
      const { favoritesMovies, pagesCount } = payload;

      state.favoritesMovies = favoritesMovies;
      state.pagesCount = pagesCount;
    });
  },
});

export default favoritesMovies.reducer;
