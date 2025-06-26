import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../utils/constants";
import { setError, setLoading } from "../../appStatusSlice";

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
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    try {
      const response = await axios.request(options);
      return response.data.genres;
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
