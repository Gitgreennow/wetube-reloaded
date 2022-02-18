import express from "express";

import {
  getEdit,
  postEdit,
  remove,
  getUpload,
  postUpload,
  watch,
} from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.route("/:id(\\d+)").get(watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
