import axiosInstance from "./axiosInstance";

// GET /blogs
export const getAllBlogs = () => axiosInstance.get("/blogs");

// GET /blogs/:blogId
export const getBlogById = (id) => axiosInstance.get(`/blogs/${id}`);

// POST /blogs   (needs login)
export const createBlog = (data) => axiosInstance.post("/blogs", data);

// PUT /blogs/:blogId   (needs login, only author)
export const updateBlog = (id, data) => axiosInstance.put(`/blogs/${id}`, data);

// DELETE /blogs/:blogId   (needs login, only author)
export const deleteBlog = (id) => axiosInstance.delete(`/blogs/${id}`);
