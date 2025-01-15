import axios from "axios";
// import { CourseType } from "../models/course-model";

const BACKEND_URL = `${import.meta.env.VITE_BACKEND_URL}/course`;
const token = localStorage.getItem("token");

export const createCourseApi = async (courseData: FormData) => {
  const response = await axios.post(BACKEND_URL, courseData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getCoursesAdminApi = async () => {
  const response = await axios.get(`${BACKEND_URL}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
