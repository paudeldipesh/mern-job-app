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

router.route("/").get(getJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(validateJobInput, validateIdParam, updateJob)
  .delete(validateIdParam, deleteJob);
