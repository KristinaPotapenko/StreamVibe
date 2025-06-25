import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPaginatedTMDB } from "../../fetchPaginatedTMDB";

export const getFavoritesMovies = createAsyncThunk(
  "favoritesMovies/getFavoritesMovies",
  async (page = null, thunkAPI) => {
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
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
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
