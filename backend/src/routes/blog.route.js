import { Router } from "express";

import {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
} from "../controllers/blog.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();


// Public routes

router.route("/").get(getAllBlogs);

router.route("/:blogId").get(getBlogById);


// Secured routes

router.route("/").post(verifyJWT, createBlog);

router.route("/:blogId")
    .put(verifyJWT, updateBlog)
    .delete(verifyJWT, deleteBlog);


export default router;