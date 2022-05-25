import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAsync = createAsyncThunk(
  "user/loginAsync",
  async ({ info }) => {
    const response = await axios.post("http://localhost:4000/api/user/login", {
      email: info.email,
      password: info.password,
    });
    console.log("this is the response", response);
    return response;
  }
);

export const logoutAsync = createAsyncThunk("user/logoutAsync", async () => {
  const response = await axios
    .get("http://localhost:4000/api/user/signout")
    .catch((error) => {
      console.log(error);
    });
  return response.data;
});

export const createAccountAsync = createAsyncThunk(
  "user/createAccountAsync",
  async ({ userForm }) => {
    console.log("this is the axios function for create account", userForm);
    const response = await axios.post("http://localhost:4000/api/user/signup", {
      name: userForm.name,
      email: userForm.email,
      password: userForm.password,
      phone: userForm.phone,
      accountType: userForm.accountType,
      city: userForm.city,
      completeAddress: userForm.completeAddress,
      country: userForm.country,
      online: userForm.online,
      profileImage: userForm.profileImage,
      state: userForm.state,
    });
    console.log("this is the response in createAccountAsync", response);
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
    loggedIn: false,
    user: {},
    token: null,
    userId: null,
    loginLoading: false,
    isloginError: false,
    loginError: null,
    signedUp: false,
    signupLoading: false,
    signupError: null,
  },
  extraReducers: {
    [loginAsync.pending]: (state, action) => {
      state.loginLoading = true;
    },
    [loginAsync.fulfilled]: (state, action) => {
      let user = action.payload.data;
      // state.user = action.payload.data;
      state.user.email = user.userData.email;
      state.user.phone = user.userData.phone;
      state.user.lastlogin = user.userData.lastlogin;
      state.user.name = user.userData.name;
      state.user.accountType = user.userData.accountType;
      state.user.userId = user.userData.uid;
      state.loginLoading = false;
      state.loggedIn = true;
      state.loginError = false;
      console.log("fulfilled function is finished", state.loggedIn, state.user);
    },
    [loginAsync.rejected]: (state, action) => {
      console.log("this is in the rejected function", action.error);
      state.loginLoading = false;
      state.isloginError = true;
      state.email = "";
      state.password = "";
      state.loggedIn = false;
      state.loginError = action.error.code;
    },
    [logoutAsync.fulfilled]: (state, action) => {
      state.loggedIn = false;
      state.user.email = "";
      state.user.phone = "";
      state.user.lastlogin = "";
      state.user.username = "";
      state.isloginError = false;
    },
    [createAccountAsync.pending]: (state) => {
      state.signupLoading = true;
      state.signupError = null;
    },
    [createAccountAsync.fulfilled]: (state, action) => {
      let user = action.payload.data;
      state.user.name = user.data.name;
      state.user.email = user.data.email;
      state.user.phone = user.data.phone;
      state.user.accountType = user.data.accountType;
      state.user.city = user.data.city;
      // state.user.profileImage = user.data.profileImage;
      state.user.country = user.data.country;
      state.user.completeAddress = user.data.completeAddress;
      state.user.online = user.data.online;
      state.signupLoading = false;
      state.signupError = null;
      state.signedUp = true;
    },
    [createAccountAsync.rejected]: (state, action) => {
      console.log("this is the rejected in the create account", action);
      state.signupError = action.error.code;
      state.signupLoading = false;
    },
  },
});

export default userSlice;
