import express from "express";
import { validateRequest } from "../middleware";
import { createUserSchema } from "../schema/user.schema";
import { createUserHandler } from "../controller/user.controller";

export const router = express.Router();

// Register user
router.post("/", validateRequest(createUserSchema), createUserHandler);
