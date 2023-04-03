import { Router } from "express";
import {
  createUserController,
  getUserController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDatalsValid.middlewares";
import { userSerializer } from "../serializers/user.schemas";

const userRouter = Router();

userRouter.get("", getUserController);
userRouter.post(
  "",
  ensureDataIsValidMiddleware(userSerializer),
  createUserController
);
userRouter.patch("");
userRouter.delete("");
// adicionar soft delete dentro das entities!

export default userRouter;
