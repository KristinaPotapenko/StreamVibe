import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../utils/constants";
import { setError, setLoading } from "../../appStatusSlice";

export const getTvEpisodeImages = createAsyncThunk(
  "tvEpisodes/getTvEpisodeImages",
  async ({ tvId, seasonId }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    try {
      const response = await axios.request({
        method: "GET",
        url: `${BASE_URL}/3/tv/${tvId}/season/${seasonId}/images`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      return response.data.posters;
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

export const getTvEpisodeVideo = createAsyncThunk(
  "tvEpisodes/getTvEpisodeVideo",
  async ({ tvId, seasonId }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    try {
      const response = await axios.request({
        method: "GET",
        url: `${BASE_URL}/3/tv/${tvId}/season/${seasonId}/videos`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });

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

export const getTvEpisodes = createAsyncThunk(
  "tvEpisodes/getTvEpisodes",
  async ({ tvId, seasonId }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    try {
      const response = await axios.request({
        method: "GET",
        url: `${BASE_URL}/3/tv/${tvId}/season/${seasonId}?language=en-US`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      return response.data.episodes;
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

const tvEpisodes = createSlice({
  name: "tvEpisodes",
  initialState: {
    tvEpisodes: [],
    season: "",
    tvEpisodeVideo: "",
    tvEpisodeImages: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTvEpisodes.fulfilled, (state, { payload }) => {
        state.tvEpisodes = payload;
      })
      .addCase(getTvEpisodeVideo.fulfilled, (state, { payload }) => {
        state.tvEpisodeVideo = payload;
      })
      .addCase(getTvEpisodeImages.fulfilled, (state, { payload }) => {
        state.tvEpisodeImages = payload;
      });
  },
});

export default tvEpisodes.reducer;
