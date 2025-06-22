import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../utils/constants";

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
    try {
      const response = await axios.request(options);
      return response.data.guest_session_id;
    } catch (error) {
      return thunkAPI.rejectWithValue;
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
