import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { router } from "./routes/index.js";

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5174");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(router);

app.listen(process.env.API_PORT, () => {
  console.log(`App running on port ${process.env.API_PORT}.`);
});
