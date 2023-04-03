import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import getUserService from "../services/users/getUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const data = await createUserService(userData);

  return res.status(201).json(data);
};

const getUserController = async (req: Request, res: Response) => {
  const data = await getUserService();

  return res.status(200).json(data);
};

export { createUserController, getUserController };
