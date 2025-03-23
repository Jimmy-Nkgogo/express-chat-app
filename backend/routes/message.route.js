import { Router } from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar } from "../controllers/message.controller.js";

const router = Router();

router.get("/user",protectRoute, getUsersForSidebar)
router.get("/:id",protectRoute,getMessages)

export default router;