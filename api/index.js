import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { router } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.API_PORT, () => {
  console.log(`App running on port ${process.env.API_PORT}.`);
});
