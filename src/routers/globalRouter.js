import express from "express";
import morgan from "morgan";
import { join } from "../controllers/userController.js";
import { trending } from "../controllers/videoController.js";
import { search } from "../controllers/videoController.js";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/search", search);

export default globalRouter;
