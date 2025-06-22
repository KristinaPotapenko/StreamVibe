import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../utils/constants";

const options = {
  method: "GET",
  url: `${BASE_URL}/3/genre/tv/list?language=en`,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getGenresTV = createAsyncThunk(
  "genresTV/getGenresTV",
  async (_, thunkAPI) => {
    try {
      const response = await axios.request(options);
      return response.data.genres;
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);

const genresTVSlice = createSlice({
  name: "genresTV",
  initialState: {
    genresTV: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getGenresTV.fulfilled, (state, { payload }) => {
      state.genresTV = payload;
    });
  },
});

export default genresTVSlice.reducer;
