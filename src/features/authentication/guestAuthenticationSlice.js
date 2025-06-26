import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../utils/constants";
import { setLoading, setError } from "../appStatusSlice";

const options = {
  method: "GET",
  url: `${BASE_URL}/3/authentication/guest_session/new`,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getAuthenticationGuestSession = createAsyncThunk(
  "guestAuthentication/getAuthenticationGuestSession",
  async (_, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    try {
      const response = await axios.request(options);
      return response.data.guest_session_id;
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

const guestAuthentication = createSlice({
  name: "guestAuthentication",
  initialState: {
    guestAuthentication: "",
  },
  extraReducers: (builder) => {
    builder.addCase(
      getAuthenticationGuestSession.fulfilled,
      (state, { payload }) => {
        state.guestAuthentication = payload;
      }
    );
  },
});

export default guestAuthentication.reducer;
