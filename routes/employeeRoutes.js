import express from "express";

const router = express.Router();

router.get("/list", (req, res) => {
  //  res.send("Hello World!");
  // res.status(5000).send("Error 5000");
  res.json({
    first_name: "Juan",
    last_name: "Dela Cruz",
    age: 20,
    email: "jdelacruz@email.com",
    gender: "Male",
    request_date: new Date(),
  });
});

router.get("/show", (req, res) => {
  //  res.send("Hello World!");
  // res.status(5000).send("Error 5000");
  res.json({
    first_name: "Juan",
    last_name: "Dela Cruz",
    age: 20,
    email: "jdelacruz@email.com",
    gender: "Male",
    request_date: new Date(),
  });
});

export default router;
