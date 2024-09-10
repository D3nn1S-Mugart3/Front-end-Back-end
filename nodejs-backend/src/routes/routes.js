import express from "express";
import {
  createComputer,
  deleteComputer,
  getAllComputer,
  getComputer,
  updateComputer,
} from "../controllers/BlogControllers.js";
const router = express.Router();

router.get("/", getAllComputer);
router.get("/:id", getComputer);
router.post("/", createComputer);
router.put("/:id", updateComputer);
router.delete("/:id", deleteComputer);

export default router;
