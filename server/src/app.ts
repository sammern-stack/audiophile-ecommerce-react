import express from "express";
import cors from "cors";
import { corsOptions } from "./config/corsOptions.js";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

export default app;
