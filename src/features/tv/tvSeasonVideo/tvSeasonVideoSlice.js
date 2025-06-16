import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/constants";
import axios from "axios";

export const getTvSeasonVideo = createAsyncThunk(
  "tvSeasonVideo/getTvSeasonVideo",
  async ({ tvId, seasonId }, thunkAPI) => {
    try {
      const response = await axios.request({
        method: "GET",
        url: `${BASE_URL}/3/tv/${tvId}/season/${seasonId}/videos?language=en-US`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWZjMDg4YzdmZWQyYTM2MTM2MWNiMmRiMjg0N2ZjNiIsIm5iZiI6MTc0Nzk5OTA4MC40NDgsInN1YiI6IjY4MzA1OTY4MmQ1ZDVmYmNmYjA1NDQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1MCsMVOTJKf4vQ4MnEanVDq5yzNB4Ik8cVnZcIqDgf0",
        },
      });

      return { seasonId: seasonId, video: response.data?.results[0]?.key };
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);

const tvSeasonVideo = createSlice({
  name: "tvSeasonVideo",
  initialState: {
    seasonVideos: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getTvSeasonVideo.fulfilled, (state, { payload }) => {
      const { seasonId, video } = payload;
      state.seasonVideos[seasonId] = video;
    });
  },
});

export default tvSeasonVideo.reducer;
