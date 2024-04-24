import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import rateLimit from "express-rate-limit";
import "dotenv/config";
const server = express();
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 500,
  message: "request limit reached"
});
const port = 4444;

server.use(express.json());
server.use("/api", rateLimiter);
const conectionString = process.env.conectionString;

mongoose.connect(conectionString);

router(server, mongoose);

server.listen(port, () => console.log(`Running on port http://localhost:${port}`));