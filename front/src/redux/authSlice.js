// pour creer des pallier d'information pour la botique
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../ServiceAappelApi";
import {
  getAccessTokenFromLocalStorage,
  setAccesTokenStorage,
} from "../utility/utility";

export const logMe = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const response = await login(user);
    setAccesTokenStorage(response.data);
    console.log("response ici", response);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
// user ? user :
const initialState = {
  user: getAccessTokenFromLocalStorage("accessToken")
    ? getAccessTokenFromLocalStorage("accessToken")
    : null,
  isError: false,
  message: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [logMe.pending]: () => {
      console.log("pennding");
    },
    [logMe.fulfilled]: (state, { payload }) => {
      return { ...state, user: payload };
    },
    [logMe.rejected]: () => {
      console.log("rejected");
    },
  },
});
export default authSlice.reducer;
