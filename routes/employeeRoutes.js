import express from "express";
import {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", getAllEmployees);
router.get("/:id", getEmployee);
router.post("/", createEmployee);
router.patch("/:id", updateEmployee);

router.delete("/:id", (req, res) => {
  res.json({ message: "delete request successfull" });
});

export default router;
