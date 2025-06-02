import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/constants";
import axios from "axios";

const options = {
  method: "GET",
  url: `${BASE_URL}/3/movie/popular?language=en-US&page=1`,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWZjMDg4YzdmZWQyYTM2MTM2MWNiMmRiMjg0N2ZjNiIsIm5iZiI6MTc0Nzk5OTA4MC40NDgsInN1YiI6IjY4MzA1OTY4MmQ1ZDVmYmNmYjA1NDQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1MCsMVOTJKf4vQ4MnEanVDq5yzNB4Ik8cVnZcIqDgf0",
  },
};

export const getTrendingNowMovies = createAsyncThunk(
  "trendingMovies/getTrendingNowMovies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.request(options);
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const trendingNowMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState: {
    trendingMovies: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getTrendingNowMovies.fulfilled, (state, { payload }) => {
      state.trendingMovies = payload;
    });
  },
});

export default trendingNowMoviesSlice.reducer;
