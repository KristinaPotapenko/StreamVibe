import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { account_id, API_KEY, BASE_URL } from "../../utils/constants";
import { setError, setLoading } from "../appStatusSlice";

export const addFavoriteMedia = createAsyncThunk(
  "favorite/addFavoriteMedia",
  async (raw, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    try {
      const session_id = localStorage.getItem("sessionId");

      const response = await axios.request({
        method: "POST",
        url: `${BASE_URL}/3/account/${account_id}/favorite?session_id=${session_id}`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        data: raw,
      });

      return {
        success: response.data.success,
        message: response.data.status_message,
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

const favorite = createSlice({
  name: "favorite",
  initialState: { success: false, message: "" },
  reducers: {
    resetFavoriteSuccess: (state) => {
      state.success = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addFavoriteMedia.fulfilled, (state, { payload }) => {
      const { success, message } = payload;

      state.success = success;
      state.message = message;
    });
  },
});

export const { resetFavoriteSuccess } = favorite.actions;
export default favorite.reducer;
