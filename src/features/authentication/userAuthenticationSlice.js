import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const optionsRequestToken = {
  method: "GET",
  url: `${BASE_URL}/3/authentication/token/new`,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDM1ZDZlMDUzOWQ2M2FmODA3NGZmZTgzMzg2MjlmNyIsIm5iZiI6MTc0Nzk5OTA4MC40NDgsInN1YiI6IjY4MzA1OTY4MmQ1ZDVmYmNmYjA1NDQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xBdgADr7TleB5hyfUvuFJuOWwQq3gUYeJCq6jlY9wuM",
  },
};

export const getRequestToken = createAsyncThunk(
  "userAuthentication/getRequestToken",
  async (_, thunkAPI) => {
    try {
      const response = await axios.request(optionsRequestToken);
      return response.data.request_token;
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);

export const getSessionId = createAsyncThunk(
  "userAuthentication/getSessionId",
  async (requestToken, thunkAPI) => {
    try {
      const response = await axios.request({
        method: "POST",
        url: `${BASE_URL}/3/authentication/session/new?api_key=••••••`,
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDM1ZDZlMDUzOWQ2M2FmODA3NGZmZTgzMzg2MjlmNyIsIm5iZiI6MTc0Nzk5OTA4MC40NDgsInN1YiI6IjY4MzA1OTY4MmQ1ZDVmYmNmYjA1NDQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xBdgADr7TleB5hyfUvuFJuOWwQq3gUYeJCq6jlY9wuM",
        },
        data: JSON.stringify({
          request_token: requestToken,
        }),
      });
      return response.data.session_id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const accountType = localStorage.getItem("accountType");
const sessionId = localStorage.getItem("sessionId");

const userAuthentication = createSlice({
  name: "userAuthentication",
  initialState: {
    accountType: accountType || null,
    requestToken: null,
    sessionId: sessionId || null,
    error: null,
  },
  reducers: {
    setAccountType: (state, { payload }) => {
      state.accountType = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRequestToken.fulfilled, (state, { payload }) => {
        state.requestToken = payload;
      })
      .addCase(getSessionId.fulfilled, (state, { payload }) => {
        state.sessionId = payload;
      })
      .addCase(getSessionId.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setAccountType } = userAuthentication.actions;
export default userAuthentication.reducer;
