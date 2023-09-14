import express from "express";
import "dotenv/config";
import employeeRoutes from "./routes/employeeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import logger from "./middlewares/logger.js";
import auth from "./middlewares/auth.js";
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

//recommended because it waits for database to connect
try {
  await mongoose.connect(process.env.HOST + process.env.DB, {
    useNewUrlParser: true,
  });
  console.log("Connected to database...");
} catch (error) {
  console.log(error);
}

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use(logger);
// app.use(auth);
app.use("/api/employees", employeeRoutes);
app.use("/api/users", userRoutes);

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server started");
});
