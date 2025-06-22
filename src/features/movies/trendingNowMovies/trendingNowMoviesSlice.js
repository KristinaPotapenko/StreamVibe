import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../utils/constants";

export const getTrendingNowMovies = createAsyncThunk(
  "trendingMovies/getTrendingNowMovies",
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.request({
        method: "GET",
        url: `${BASE_URL}/3/movie/popular?language=en-US&page=${page}`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      return {
        data: response.data.results,
        pageCount: Math.min(response.data.total_pages, 500),
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const trendingNowMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState: {
    trendingMovies: [],
    totalPages: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getTrendingNowMovies.fulfilled, (state, { payload }) => {
      const { data, pageCount } = payload;
      state.trendingMovies = data;
      state.totalPages = pageCount;
    });
  },
});

export default trendingNowMoviesSlice.reducer;
