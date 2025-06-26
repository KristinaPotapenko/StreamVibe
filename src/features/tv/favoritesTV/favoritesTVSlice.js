import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPaginatedTMDB } from "../../fetchPaginatedTMDB";
import { setError, setLoading } from "../../appStatusSlice";

export const getFavoritesTV = createAsyncThunk(
  "favoritesTV/getFavoritesTV",
  async (page = null, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    const sessionId = localStorage.getItem("sessionId");

    try {
      const { results, totalPages } = await fetchPaginatedTMDB({
        endpoint: "favorite/tv",
        sessionId,
        singlePage: page,
      });

      return {
        favoritesTV: results,
        pagesCount: totalPages,
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

const favoritesTV = createSlice({
  name: "favoritesTV",
  initialState: {
    favoritesTV: [],
    pagesCount: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getFavoritesTV.fulfilled, (state, { payload }) => {
      const { favoritesTV, pagesCount } = payload;

      state.favoritesTV = favoritesTV;
      state.pagesCount = pagesCount;
    });
  },
});

export default favoritesTV.reducer;
