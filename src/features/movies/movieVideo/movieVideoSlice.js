import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../utils/constants";

export const getMovieVideo = createAsyncThunk(
  "movieVideo, getMovieVideo",
  async (id, thunkAPI) => {
    try {
      const response = await axios.request({
        method: "GET",
        url: `${BASE_URL}/3/movie/${id}/videos`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
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
