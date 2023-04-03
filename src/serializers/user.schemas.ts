import * as yup from "yup";
import { Schema } from "yup";
import { iUserRequest } from "../interfaces/users.interfaces";

export const userSerializer: Schema<iUserRequest> = yup.object().shape({
  email: yup.string().required(),
  name: yup.string().required(),
  telephone: yup.string().required(),
  password: yup.string().required(),
  cpf: yup.string().required(),
});
