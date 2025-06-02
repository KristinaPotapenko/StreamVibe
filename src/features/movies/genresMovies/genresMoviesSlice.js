import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/constants";
import axios from "axios";

const options = {
  method: "GET",
  url: `${BASE_URL}/3/genre/movie/list?language=en`,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWZjMDg4YzdmZWQyYTM2MTM2MWNiMmRiMjg0N2ZjNiIsIm5iZiI6MTc0Nzk5OTA4MC40NDgsInN1YiI6IjY4MzA1OTY4MmQ1ZDVmYmNmYjA1NDQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1MCsMVOTJKf4vQ4MnEanVDq5yzNB4Ik8cVnZcIqDgf0",
  },
};

export const getGenresMovies = createAsyncThunk(
  "genresMovies/getGenresMovies",
  async (_, thunkAPI) => {
    try {
      const rersponse = await axios.request(options);
      return rersponse.data.genres;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const genresMoviesSlice = createSlice({
  name: "genresMovies",
  initialState: {
    genresMovies: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getGenresMovies.fulfilled, (state, { payload }) => {
      state.genresMovies = payload;
    });
  },
});

export default genresMoviesSlice.reducer;
