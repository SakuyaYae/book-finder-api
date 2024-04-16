import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import "dotenv/config";
const server = express();

const port = 4444;

server.use(express.json());
const conectionString = process.env.conectionString;

mongoose.connect(conectionString);

router(server, mongoose);

server.listen(port, () => console.log(`Running on port http://localhost:${port}`));