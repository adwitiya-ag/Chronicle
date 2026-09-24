import axios from "axios";
import { BASE_URL } from "../config/config";

// One axios object used by every API call
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // lets the browser send/receive cookies
});

// Before every request, attach the token (if we have one)
axiosInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

export default axiosInstance;
