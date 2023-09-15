import User from "../models/User.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });

    if (user) {
      res.status(201).json({ message: "User created successfully" });
    } else {
      res.status(400).json({ message: "Failed to create the user" });
    }
  } catch (err) {
    res.status(400).json({ message: "Encountered an error" });
  }
};

export { createUser };
