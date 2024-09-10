import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getUserApi,
  loginApi,
  registerApi,
} from "../../../service/auth-service";
import { toast } from "react-toastify";
import { typeLogin, typeRegister } from "../../../models/auth-model";

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  createdAt: "string";
  updatedAt: "string";
}

interface UserType {
  user: User | null;
  token: string;
  status: "fetching" | "success" | "failed" | "init";
  error: string | null;
}

const initialState: UserType = {
  user: null,
  token: "",
  status: "init",
  error: null,
};

// Thunk Register
export const register = createAsyncThunk(
  "auth/register",
  async (userData: typeRegister, thunkAPI) => {
    try {
      const response = await registerApi(userData);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

// Thunk Login
export const login = createAsyncThunk(
  "auth/login",
  async (userData: typeLogin, thunkAPI) => {
    try {
      const response = await loginApi(userData);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

// Thunk getUser
export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    const response = await getUserApi();
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "getUser failed"
    );
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register
    builder.addCase(register.pending, (state, action) => {
      state.status = "fetching";
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.status = "success";
      state.error = null;
      toast.success("Register Successfilly");
    });
    builder.addCase(register.rejected, (state, action) => {
      state.status = "failed";
      state.error =
        typeof action.payload === "string"
          ? action.payload
          : "Registration failed";
      toast.error(state.error);
    });

    // login
    builder.addCase(login.pending, (state, action) => {
      state.status = "fetching";
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "success";
      state.error = null;
      localStorage.setItem("token", action.payload.token);
      toast.success("Login Successfilly");
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "failed";
      state.error =
        typeof action.payload === "string" ? action.payload : "Login failed";
      toast.error(state.error);
    });

    // getUser
    builder.addCase(getUser.pending, (state, action) => {
      state.status = "fetching";
      state.error = null;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.status = "success";
      state.error = null;
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.status = "failed";
      state.error =
        typeof action.payload === "string" ? action.payload : "Login failed";
      toast.error(state.error);
    });
  },
});

export default authSlice.reducer;
