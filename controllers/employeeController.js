import mongoose from "mongoose";
import Employee from "../models/Employee.js";

const handleError = (err) => {
  let errors = [];
  // errors.push(err.message);

  if (err.message.includes("Employee validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors.push({ message: properties.message });
    });
  }

  return errors;
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.json(employees);
  } catch (err) {
    res.status(400).json(handleError(err));
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
  } catch (err) {
    res.status(400).json(handleError(err));
  }
};

const createEmployee = async (req, res) => {
  const { first_name, last_name, email, age } = req.body;

  try {
    const employee = await Employee.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      age: age,
    });

    if (employee) {
      res
        .status(201)
        .json({ message: "Employee successfully created", data: employee });
    } else {
      res.status(204).json({ message: "Failed to create employee record." });
    }
  } catch (err) {
    res.status(400).json(handleError(err));
  }
};

const updateEmployee = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid parameter" });
    return;
  }

  try {
    const { first_name, last_name, email, age } = req.body;

    const employee = await Employee.findByIdAndUpdate(id, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      age: age,
    });

    if (employee) {
      res.json({ message: "Employee updated successfully" });
    } else {
      res.status(204).json({ message: "Failed to update Employee record." });
    }
  } catch (err) {
    res.status(400).json(handleError(err));
  }
};

const deleteEmployee = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid parameter" });
    return;
  }

  try {
    const employee = await Employee.findByIdAndDelete(id);
    res.json({ message: "Employee successfully deleted." });
  } catch (err) {
    res.json({ message: "Failed to delete Employee record." });
  }
};

export {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
