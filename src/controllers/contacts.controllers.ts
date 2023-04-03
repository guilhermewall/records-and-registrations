import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact";
import getContactService from "./../services/contacts/getContact.service";
import updatedContactService from "../services/contacts/updateUser.service";
import getMyContactService from "../services/contacts/getMyContact.service";

const createContactController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const data = req.body;

  const contact = await createContactService(data, userId);

  return res.status(201).json(contact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const emailContact: string = req.body.email;

  console.log("+++++++", emailContact);

  const message = await deleteContactService(userId, emailContact);

  return res.status(204).json(message);
};

const getContactController = async (req: Request, res: Response) => {
  const contacts = await getContactService();

  return res.status(200).json(contacts);
};

const updatedContactController = async (req: Request, res: Response) => {
  const data = req.body;
  const userId = req.user.id;

  const contact = await updatedContactService(userId, data);

  return res.status(200).json(contact);
};

const getMyContactController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const contacts = await getMyContactService(userId);

  return res.status(200).json(contacts);
};

export {
  createContactController,
  deleteContactController,
  getContactController,
  updatedContactController,
  getMyContactController,
};
