import express from "express";

const router = express.Router();

router.get("/list", (req, res) => {
  //  res.send("Hello World!");
  // res.status(5000).send("Error 5000");
  res.json({
    login_name: "jdoe",
    email: "jdoe@email.com",
    request_date: new Date(),
  });
});

export default router;
