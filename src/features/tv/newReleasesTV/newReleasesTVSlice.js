import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/constants";
import axios from "axios";

export const getNewRealeasesTV = createAsyncThunk(
  "newRealeasesTV/getNewRealeasesTV",
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.request({
        method: "GET",
        url: `${BASE_URL}/3/tv/on_the_air?language=en-US&page=${page}`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWZjMDg4YzdmZWQyYTM2MTM2MWNiMmRiMjg0N2ZjNiIsIm5iZiI6MTc0Nzk5OTA4MC40NDgsInN1YiI6IjY4MzA1OTY4MmQ1ZDVmYmNmYjA1NDQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1MCsMVOTJKf4vQ4MnEanVDq5yzNB4Ik8cVnZcIqDgf0",
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

const newRealeasesTVSlice = createSlice({
  name: "newRealeasesTV",
  initialState: {
    newRealeasesTV: [],
    totalPages: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getNewRealeasesTV.fulfilled, (state, { payload }) => {
      const { data, pageCount } = payload;
      state.newRealeasesTV = data;
      state.totalPages = pageCount;
    });
  },
});
export default newRealeasesTVSlice.reducer;
