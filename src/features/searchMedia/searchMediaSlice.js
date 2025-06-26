import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../utils/constants";
import { setError, setLoading } from "../appStatusSlice";

export const fetchSearchResults = createAsyncThunk(
  "searchMedia/fetchSearchResults",
  async ({ query, page }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    try {
      const response = await axios.request({
        method: "GET",
        url: `${BASE_URL}/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`,
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
      dispatch(
        setError(error.response?.data?.status_message || "Request failed")
      );
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    } finally {
      dispatch(setLoading(false));
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
