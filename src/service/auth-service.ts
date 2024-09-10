import axios from "axios";
import { typeLogin, typeRegister } from "../models/auth-model";

const BACKEND_URL = `${import.meta.env.VITE_BACKEND_URL}/auth`;

export const registerApi = async (userData: typeRegister) => {
  const response = await axios.post(`${BACKEND_URL}/register`, userData);
  return response.data;
};

export const loginApi = async (userData: typeLogin) => {
  const response = await axios.post(`${BACKEND_URL}/login`, userData);
  return response.data;
};

export const getUserApi = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found");
  }
  const response = await axios.get(BACKEND_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
