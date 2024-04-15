import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
const server = express();

const port = 4444;

server.use(express.json());
const conectionString = "";

mongoose.connect(conectionString);

router(server, mongoose);

server.listen(port, () => console.log(`Running on port http://localhost:${port}`));