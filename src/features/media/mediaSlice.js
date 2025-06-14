import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const fetchMediaData = createAsyncThunk(
  "media/fetchMediaData",
  async (
    { page = 1, mediaType, mediaId = null, genreId = null, top10 = false },
    thunkAPI
  ) => {
    let url = `${BASE_URL}/3/`;
    let checkedMediaType;

    if (mediaType === "movies") {
      checkedMediaType = "movie";
    } else if (mediaType === "tvs") {
      checkedMediaType = "tv";
    } else {
      checkedMediaType = mediaType;
    }

    if (mediaId) {
      url += `${checkedMediaType}/${mediaId}`;
    } else if (genreId) {
      url += `discover/${checkedMediaType}?with_genres=${genreId}&page=${page}`;
      if (top10) url += `&sort_by=popularity.desc&page=${page}`;
    } else if (top10) {
      url += `${checkedMediaType}/popular?page=${page}`;
    } else {
      url += `${checkedMediaType}/popular?page=${page}`;
    }

    try {
      const response = await axios.request({
        method: "GET",
        url: `${url}`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWZjMDg4YzdmZWQyYTM2MTM2MWNiMmRiMjg0N2ZjNiIsIm5iZiI6MTc0Nzk5OTA4MC40NDgsInN1YiI6IjY4MzA1OTY4MmQ1ZDVmYmNmYjA1NDQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1MCsMVOTJKf4vQ4MnEanVDq5yzNB4Ik8cVnZcIqDgf0",
        },
      });

      return {
        type: mediaType,
        data: response.data,
        pageCount: Math.min(response.data.total_pages, 500),
      };
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);

const mediaSlice = createSlice({
  name: "media",
  initialState: {
    movies: [],
    tvs: [],
    tv: {},
    movie: {},
    totalMoviesPages: "",
    totalTvsPages: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMediaData.fulfilled, (state, { payload }) => {
      const { type, data, pageCount } = payload;
      if (type === "movies") {
        state.movies = data.results;
        state.totalPagesMovies = pageCount;
      }
      if (type === "tvs") {
        state.tvs = data.results;
        state.totalPagesTvs = pageCount;
      }

      if (type === "tv") state.tv = data;
      if (type === "movie") state.movie = data;
    });
  },
});

export default mediaSlice.reducer;
