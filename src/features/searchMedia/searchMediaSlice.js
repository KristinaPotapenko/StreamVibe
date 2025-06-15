import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const fetchSearchResults = createAsyncThunk(
  "searchMedia/fetchSearchResults",
  async ({ query, page }, thunkAPI) => {
    try {
      const response = await axios.request({
        method: "GET",
        url: `${BASE_URL}/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`,
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

const searchMedia = createSlice({
  name: "searchMedia",
  initialState: {
    media: [],
    totalPages: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResults.fulfilled, (state, { payload }) => {
      const { data, pageCount } = payload;
      state.media = data;
      state.totalPages = pageCount;
    });
  },
});

export default searchMedia.reducer;
