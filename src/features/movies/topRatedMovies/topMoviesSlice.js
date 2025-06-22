import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../utils/constants";

const options = {
  method: "GET",
  url: `${BASE_URL}/3/movie/top_rated?language=en-US`,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getTopMovies = createAsyncThunk(
  "topMovies/getTopMovies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.request(options);
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const topMoviesSlice = createSlice({
  name: "topMovies",
  initialState: {
    topMovies: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getTopMovies.fulfilled, (state, { payload }) => {
      state.topMovies = payload;
    });
  },
});

export default topMoviesSlice.reducer;
