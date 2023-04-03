import "reflect-metadata";
import "express-async-errors";
import express from "express";
import "reflect-metadata";
import router from "./routes";
import handleError from "./errors/handleError";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.use(handleError);

export default app;
