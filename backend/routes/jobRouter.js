import { Router } from "express";
const router = Router();
export default router;
import {
  getJobs,
  getJob,
  updateJob,
  deleteJob,
  createJob,
} from "../controllers/jobControllers.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);
