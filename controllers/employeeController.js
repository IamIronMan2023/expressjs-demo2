import mongoose from "mongoose";
import Employee from "../models/Employee.js";

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.json(employees);
  } catch (error) {
    throw error;
  }
};

const getEmployee = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid parameter" });
    return;
  }

  try {
    const employee = await Employee.findById(id);

    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: "Record not found." });
    }
  } catch (error) {
    throw error;
  }
};

export { getAllEmployees, getEmployee };
