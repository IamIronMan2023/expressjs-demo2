import express from "express";
import {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", auth, getAllEmployees);
router.get("/:id", auth, getEmployee);
router.post("/", auth, createEmployee);
router.patch("/:id", auth, updateEmployee);
router.delete("/:id", auth, deleteEmployee);

export default router;
