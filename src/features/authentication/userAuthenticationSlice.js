import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../utils/constants";
import { setError, setLoading } from "../appStatusSlice";

const optionsRequestToken = {
  method: "GET",
  url: `${BASE_URL}/3/authentication/token/new`,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getRequestToken = createAsyncThunk(
  "userAuthentication/getRequestToken",
  async (_, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    try {
      const response = await axios.request(optionsRequestToken);
      return response.data.request_token;
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

export const getSessionId = createAsyncThunk(
  "userAuthentication/getSessionId",
  async (requestToken, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(setLoading(true));

    try {
      const response = await axios.request({
        method: "POST",
        url: `${BASE_URL}/3/authentication/session/new?api_key=••••••`,
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        data: JSON.stringify({
          request_token: requestToken,
        }),
      });
      return response.data.session_id;
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

const accountType = localStorage.getItem("accountType");
const sessionId = localStorage.getItem("sessionId");

const userAuthentication = createSlice({
  name: "userAuthentication",
  initialState: {
    accountType: accountType || null,
    requestToken: null,
    sessionId: sessionId || null,
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
      });
  },
});

export const { setAccountType } = userAuthentication.actions;
export default userAuthentication.reducer;
