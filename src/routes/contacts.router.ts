import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  getContactController,
  getMyContactController,
  updatedContactController,
} from "../controllers/contacts.controllers";
import ensureAuthMiddleware from "./../middlewares/ensureAuth.middleware";
import getMyContactService from "../services/contacts/getMyContact.service";

const contactRouter = Router();

contactRouter.post("", ensureAuthMiddleware, createContactController);
contactRouter.get("", ensureAuthMiddleware, getMyContactController);

contactRouter.patch("", ensureAuthMiddleware, updatedContactController);
contactRouter.delete("", ensureAuthMiddleware, deleteContactController);

export default contactRouter;
