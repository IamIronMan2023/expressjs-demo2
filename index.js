import express from "express";
import "dotenv/config";
import employeeRoutes from "./routes/employeeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import logger from "./middlewares/logger.js";
import cors from "cors";
import mongoose from "mongoose";

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

app.get("/", (req, res) => {
  res.send("Vercel successfully deployed");
});

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use(logger);
app.use("/api/employees", employeeRoutes);
app.use("/api/users", userRoutes);

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server started");
});
