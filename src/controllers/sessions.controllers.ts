import { Request, Response } from "express";
import createSessionService from "../services/sessions/createSession";

const createSessionController = async (req: Request, res: Response) => {
  const data = req.body;
  const dataToken = await createSessionService(data);

  return res.status(201).json(dataToken);
};

export { createSessionController };
