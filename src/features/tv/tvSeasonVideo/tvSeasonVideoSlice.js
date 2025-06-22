import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../utils/constants";

export const getTvSeasonVideo = createAsyncThunk(
  "tvSeasonVideo/getTvSeasonVideo",
  async ({ tvId, seasonId }, thunkAPI) => {
    try {
      const response = await axios.request({
        method: "GET",
        url: `${BASE_URL}/3/tv/${tvId}/videos?language=en-US`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
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
