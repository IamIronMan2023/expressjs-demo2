import express from "express";
import "dotenv/config";
import employeeRoutes from "./routes/employeeRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/api/employees", employeeRoutes);
app.use("/api/users", userRoutes);

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server started");
});
