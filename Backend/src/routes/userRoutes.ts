import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Get all users");
});

userRouter.post("/register", (req, res) => {
  res.send("Register user");
});

export default userRouter;