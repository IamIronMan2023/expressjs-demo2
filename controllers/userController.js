import User from "../models/User.js";
import UserToken from "../models/UserToken.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credential" });
    }

    if (await bcrypt.compare(password, user.password)) {
      //Generate jwt token
      const token = jwt.sign(email, process.env.AUTH_TOKEN_SECRET);

      //Save Token to UserToken collection
      const userToken = await UserToken.findOne({
        userId: user._id,
        token: token,
      });

      if (!userToken) {
        await UserToken.create({ userId: user._id, token: token });
      }

      res.json({ message: "Successfully authenticated", token: token });
    } else {
      res.status(400).json({ message: "Invalid Credential" });
    }
  } catch (err) {
    res.status(400).json({ message: "Encountered an error" });
  }
};

const logoutUser = async (req, res) => {
  const { access_token } = req.body;

  try {
    const userToken = await UserToken.findOneAndDelete({ token: access_token });

    if (userToken) {
      res.json({ message: "Log Out successfuly" });
    } else {
      res.status(400).json({ message: "Log out failed" });
    }
  } catch (err) {
    res.status(400).json({ message: "Invalid parameter" });
  }
};

export { createUser, loginUser, logoutUser };
