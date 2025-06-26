import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../utils/constants";
import { setError, setLoading } from "../../appStatusSlice";

const options = {
  method: "GET",
  url: `${BASE_URL}/3/genre/movie/list?language=en`,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getGenresMovies = createAsyncThunk(
  "genresMovies/getGenresMovies",
  async (_, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    try {
      const rersponse = await axios.request(options);
      return rersponse.data.genres;
    } catch (error) {
      dispatch(
        setError(error.response?.data?.status_message || "Request failed")
      );
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    } finally {
      dispatch(setLoading(false));
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
