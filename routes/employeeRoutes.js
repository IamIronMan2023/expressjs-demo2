import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
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

router.get("/:id", (req, res) => {
  //  res.send("Hello World!");
  // res.status(5000).send("Error 5000");
  const id = req.params.id;
  console.log(id);

  res.json({
    first_name: "Juan",
    last_name: "Dela Cruz",
    age: 20,
    email: "jdelacruz@email.com",
    gender: "Male",
    request_date: new Date(),
  });
});

router.post("/", (req, res) => {
  res.json({ message: "post request successfull" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "patch request successfull" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "delete request successfull" });
});

export default router;
