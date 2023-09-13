import express from "express";
import {
  getAllEmployees,
  getEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", getAllEmployees);
router.get("/:id", getEmployee);

router.post("/", (req, res) => {
  res.json({ message: "post request successfull" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "patch request successfull" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "delete request successfull" });
});

export default router;
