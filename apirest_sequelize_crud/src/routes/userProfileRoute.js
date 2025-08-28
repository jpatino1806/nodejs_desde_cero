import { Router } from "express";
import { createUserProfile } from "../controlller/userProfileController.js";

const router = Router()

router.post("/createUserProfile", createUserProfile)

export default router;