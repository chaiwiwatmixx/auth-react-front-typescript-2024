import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CourseSliceType, CourseType } from "../../../models/course-model";
import {
  createCourseApi,
  getCoursesAdminApi,
} from "../../../service/course-service";
import { toast } from "react-toastify";

interface courseDataType {
  courses: CourseSliceType[];
  status: "fetching" | "success" | "failed" | "init";
  error: string | null;
}

const initialState: courseDataType = {
  courses: [],
  status: "init",
  error: null,
};

export const createCourse = createAsyncThunk(
  "course/createCourse",
  async (courseData: FormData, thunkAPI) => {
    try {
      const response = await createCourseApi(courseData);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "createCourse failed"
      );
    }
  }
);

export const getCoursesAdmin = createAsyncThunk(
  "course/getCoursesAdmin",
  async (_, thunkAPI) => {
    try {
      const response = getCoursesAdminApi();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "getProductsAdmin failed"
      );
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // createCourse
    builder.addCase(createCourse.pending, (state, action) => {
      state.status = "fetching";
      state.error = null;
    });
    builder.addCase(createCourse.fulfilled, (state, action) => {
      state.status = "success";
      state.error = null;
      if (action.payload) {
        state.courses.push(action.payload);
      }
      toast.success("Create Course Successfilly");
    });
    builder.addCase(createCourse.rejected, (state, action) => {
      state.status = "failed";
      state.error =
        typeof action.payload === "string"
          ? action.payload
          : "createCourse failed";
      toast.error(state.error);
    });

    // getCourses
    builder.addCase(getCoursesAdmin.pending, (state, action) => {
      state.status = "fetching";
      state.error = null;
    });
    builder.addCase(getCoursesAdmin.fulfilled, (state, action) => {
      state.status = "success";
      state.error = null;
      state.courses = action.payload;
    });
    builder.addCase(getCoursesAdmin.rejected, (state, action) => {
      state.status = "failed";
      state.error =
        typeof action.payload === "string"
          ? action.payload
          : "getCoursesAdmin failed";
      toast.error(state.error);
    });
  },
});

export default courseSlice.reducer;
