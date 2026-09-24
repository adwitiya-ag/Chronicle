import axiosInstance from "./axiosInstance";

// POST /users/register
export const registerUser = (data) => axiosInstance.post("/users/register", data);

// POST /users/login
export const loginUser = (data) => axiosInstance.post("/users/login", data);

// POST /users/logout
export const logoutUser = () => axiosInstance.post("/users/logout");

// POST /users/refresh-token
export const refreshToken = () => axiosInstance.post("/users/refresh-token");
