import { Router } from "express";
const router = Router();
export default router;
import { login, register } from "../controllers/authController.js";
import { validateRegisterInput } from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", login);
