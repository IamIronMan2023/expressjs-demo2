import express from "express";
import "dotenv/config";
import employeeRoutes from "./routes/employeeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import logger from "./middlewares/logger.js";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

//Express setup
const app = express();

//Connect to MongoDB

// mongoose.connect(process.env.HOST + process.env.DB, {
//   useNewUrlParser: true,
// });
// const db = mongoose.connection;
// db.on("error", (error) => console.log(error));
// db.on("open", () => console.log("Connected to database..."));

try {
  await mongoose.connect(process.env.HOST + process.env.DB, {
    useNewUrlParser: true,
  });

  console.log("Connected database...");
} catch (err) {
  console.log(err);
}

//Middlewares
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use(logger);
app.use("/api/employees", employeeRoutes);
app.use("/api/users", userRoutes);

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server started");
});
