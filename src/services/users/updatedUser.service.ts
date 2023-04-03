import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const updatedUserService = async (userData: any) => {
  const userRepository = AppDataSource.getRepository(User);
};

// tenho que fazer o login primiero pra pegar o usuario pelo token e assim substituir informações
