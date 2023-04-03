import { Router } from "express";
import userRouter from "./user.router";
import sessionRouter from "./sessions.router";
import contactRouter from "./contacts.router";

const router = Router();

router.use("/users", userRouter);
router.use("/sessions", sessionRouter);
router.use("/contacts", contactRouter);

export default router;
