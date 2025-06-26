import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../utils/constants";
import { setError, setLoading } from "../../appStatusSlice";

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
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    try {
      const response = await axios.request(options);
      return response.data.results;
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
