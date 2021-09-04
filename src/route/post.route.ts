import express from "express";
import { validateRequest, requiresUser } from "../middleware";
import { createPostSchema, updatePostSchema, deletePostSchema } from "../schema/post.schema";
import { createPostHandler, updatePostHandler, getPostHandler, deletePostHandler } from "../controller/post.controller";

export const router = express.Router();

// Create a post
router.post("/", [requiresUser, validateRequest(createPostSchema)], createPostHandler);

// Update a post
router.put("/:postId", [requiresUser, validateRequest(updatePostSchema)], updatePostHandler);

// Get a post
router.get("/:postId", getPostHandler);

// Delete a post
router.delete("/:postId", [requiresUser, validateRequest(deletePostSchema)], deletePostHandler);
