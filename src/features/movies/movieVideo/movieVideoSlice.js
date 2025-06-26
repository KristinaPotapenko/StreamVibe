import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../utils/constants";
import { setError, setLoading } from "../../appStatusSlice";

export const getMovieVideo = createAsyncThunk(
  "movieVideo, getMovieVideo",
  async (id, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

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
      dispatch(
        setError(error.response?.data?.status_message || "Request failed")
      );
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    } finally {
      dispatch(setLoading(false));
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
