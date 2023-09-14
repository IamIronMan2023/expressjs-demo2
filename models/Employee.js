import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please enter first name"],
  },
  last_name: {
    type: String,
    required: [true, "Please enter last name"],
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Employee", employeeSchema);
