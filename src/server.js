import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4500;

const app = express();
const logger = morgan("dev");
app.use(logger);

//configure application from here//
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

//run application from here//

const handleListening = () =>
  console.log(`✅server listening on port https://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
