import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../utils/constants";

export const getMustWatchTV = createAsyncThunk(
  "mustWatchTV/getMustWatchTV",
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.request({
        method: "GET",
        url: `${BASE_URL}/3/tv/top_rated?language=en-US&page=${page}`,
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
      return thunkAPI.rejectWithValue;
    }
  }
);

const mustWatchTVSlice = createSlice({
  name: "mustWatchTV",
  initialState: {
    mustWatchTV: [],
    totalPages: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getMustWatchTV.fulfilled, (state, { payload }) => {
      const { data, pageCount } = payload;
      state.mustWatchTV = data;
      state.totalPages = pageCount;
    });
  },
});

export default mustWatchTVSlice.reducer;
