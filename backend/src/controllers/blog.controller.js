import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Blog } from "../models/blog.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";


const createBlog = asyncHandler(async (req, res) => {

    const { title, content } = req.body;

    if (!title?.trim() || !content?.trim()) {
        throw new ApiError(400, "Title and content are required");
    }

    const blog = await Blog.create({
        title,
        content,
        author: req.user._id
    });

    if (!blog) {
        throw new ApiError(500, "Something went wrong while creating the blog");
    }

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                blog,
                "Blog created successfully"
            )
        );
});


const getAllBlogs = asyncHandler(async (req, res) => {

    const blogs = await Blog.find()
        .populate("author", "username fullName")
        .sort({ createdAt: -1 });

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                blogs,
                "Blogs fetched successfully"
            )
        );
});


const getBlogById = asyncHandler(async (req, res) => {

    const { blogId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        throw new ApiError(400, "Invalid blog id");
    }

    const blog = await Blog.findById(blogId)
        .populate("author", "username fullName");

    if (!blog) {
        throw new ApiError(404, "Blog not found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                blog,
                "Blog fetched successfully"
            )
        );
});


const updateBlog = asyncHandler(async (req, res) => {

    const { blogId } = req.params;
    const { title, content } = req.body;

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        throw new ApiError(400, "Invalid blog id");
    }

    if (!title?.trim() || !content?.trim()) {
        throw new ApiError(400, "Title and content are required");
    }

    const blog = await Blog.findById(blogId);

    if (!blog) {
        throw new ApiError(404, "Blog not found");
    }

    if (blog.author.toString() !== req.user._id.toString()) {
        throw new ApiError(
            403,
            "You are not authorized to update this blog"
        );
    }

    blog.title = title;
    blog.content = content;

    await blog.save();

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                blog,
                "Blog updated successfully"
            )
        );
});


const deleteBlog = asyncHandler(async (req, res) => {

    const { blogId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        throw new ApiError(400, "Invalid blog id");
    }

    const blog = await Blog.findById(blogId);

    if (!blog) {
        throw new ApiError(404, "Blog not found");
    }

    if (blog.author.toString() !== req.user._id.toString()) {
        throw new ApiError(
            403,
            "You are not authorized to delete this blog"
        );
    }

    await Blog.findByIdAndDelete(blogId);

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {},
                "Blog deleted successfully"
            )
        );
});


export {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
};