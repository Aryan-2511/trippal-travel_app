// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth", // Replace with your backend URL
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post("/login", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default api;
