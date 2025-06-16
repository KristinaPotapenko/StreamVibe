import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../utils/constants";

export const getMovieVideo = createAsyncThunk(
  "movieVideo, getMovieVideo",
  async (id, thunkAPI) => {
    try {
      const response = await axios.request({
        method: "GET",
        url: `${BASE_URL}/3/movie/${id}/videos`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWZjMDg4YzdmZWQyYTM2MTM2MWNiMmRiMjg0N2ZjNiIsIm5iZiI6MTc0Nzk5OTA4MC40NDgsInN1YiI6IjY4MzA1OTY4MmQ1ZDVmYmNmYjA1NDQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1MCsMVOTJKf4vQ4MnEanVDq5yzNB4Ik8cVnZcIqDgf0",
        },
      });

      return response.data?.results[0]?.key;
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);

const movieVideo = createSlice({
  name: "movieVideo",
  initialState: {
    movieKey: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieVideo.fulfilled, (state, { payload }) => {
      state.movieKey = payload;
    });
  },
});

export default movieVideo.reducer;
