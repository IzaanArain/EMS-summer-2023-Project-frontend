import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
};

export const userLoginAsync = createAsyncThunk(
  "auth/userLoginAsync",
  async (payload) => {
    // console.log(payload)
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login/",
        {
          email: payload.email,
          password: payload.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //   console.log(response)
      const user = response.data;
      localStorage.setItem("user", JSON.stringify(user));
    //   console.log("userLoginAsync", user);
      return { user: user };
    } catch (error) {
      console.log(error);
    }
  }
);

export const userRegisterAsync = createAsyncThunk(
  "auth/userRegisterAsync",
  async (payload) => {
    // console.log(payload)
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register/",
        {
          fname: payload.fname,
          lname: payload.lname,
          email: payload.email,
          password: payload.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //   console.log(response)
      const user = response.data;
      localStorage.setItem("user", JSON.stringify(user));
    //   console.log(user);
      return { user };
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state, action) => {
      //remove user from local storage
      localStorage.removeItem("user");
      //remove user from state
      state.user = null;
      console.log("logout state: ", state.user);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userRegisterAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userRegisterAsync.fulfilled, (state, action) => {
    //   console.log(`userRegisterAsync.fulfilled Auth state: `, action.payload);
      state.user = action.payload.user;
      state.isLoading = false;
      state.isError = false;
      //    return action.payload.user;
    });
    builder.addCase(userRegisterAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = false;
    });

    builder.addCase(userLoginAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userLoginAsync.fulfilled, (state, action) => {
    //   console.log(`userLoginAsync.fulfilled Auth state: `, action.payload.user);
      state.user = action.payload.user;
      state.isLoading = false;
      state.isError = false;
      // return action.payload.user;
    });
    builder.addCase(userLoginAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = false;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
