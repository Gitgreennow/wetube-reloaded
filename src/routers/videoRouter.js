import express from "express";
import morgan from "morgan";
import { watch } from "../controllers/videoController.js";
import { edit } from "../controllers/videoController.js";
import { remove } from "../controllers/videoController.js";
import { comments } from "../controllers/videoController.js";
import { removeComments } from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);
videoRouter.get("/remove", remove);
videoRouter.get("/comments", comments);
videoRouter.get("/comments/delete", removeComments);

export default videoRouter;
