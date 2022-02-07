import express from "express";
import morgan from "morgan";
import { edit } from "../controllers/userController.js";
import { remove } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;
