import express from "express";
import { validateRequest, requiresUser } from "../middleware";
import { createUserSessionSchema } from "../schema/user.schema";
import {
    createUserSessionHandler,
    invalidateUserSessionHandler,
    getUserSessionsHandler,
} from "../controller/session.controller";

export const router = express.Router();

// Login
router.post("/", validateRequest(createUserSessionSchema), createUserSessionHandler);

// Get the user's sessions
router.get("/", requiresUser, getUserSessionsHandler);

// Logout
router.delete("/", requiresUser, invalidateUserSessionHandler);
