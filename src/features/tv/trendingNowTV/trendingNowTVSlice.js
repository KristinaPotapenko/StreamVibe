import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../utils/constants";

const options = {
  method: "GET",
  url: `${BASE_URL}/3/tv/popular?language=en-US&page=1`,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWZjMDg4YzdmZWQyYTM2MTM2MWNiMmRiMjg0N2ZjNiIsIm5iZiI6MTc0Nzk5OTA4MC40NDgsInN1YiI6IjY4MzA1OTY4MmQ1ZDVmYmNmYjA1NDQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1MCsMVOTJKf4vQ4MnEanVDq5yzNB4Ik8cVnZcIqDgf0",
  },
};

export const getTrendingNowTV = createAsyncThunk(
  "trendingNowTV/getTrendingNowTV",
  async (_, thunkAPI) => {
    try {
      const response = await axios.request(options);
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);

const trendingNowTVSlice = createSlice({
  name: "trendingNowTV",
  initialState: {
    trendingNowTV: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getTrendingNowTV.fulfilled, (state, { payload }) => {
      state.trendingNowTV = payload;
    });
  },
});

export default trendingNowTVSlice.reducer;
