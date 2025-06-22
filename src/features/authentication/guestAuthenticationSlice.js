import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const options = {
  method: "GET",
  url: `${BASE_URL}/3/authentication/guest_session/new`,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDM1ZDZlMDUzOWQ2M2FmODA3NGZmZTgzMzg2MjlmNyIsIm5iZiI6MTc0Nzk5OTA4MC40NDgsInN1YiI6IjY4MzA1OTY4MmQ1ZDVmYmNmYjA1NDQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xBdgADr7TleB5hyfUvuFJuOWwQq3gUYeJCq6jlY9wuM",
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
