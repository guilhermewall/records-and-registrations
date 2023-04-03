import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const createUserService = async (userData: any) => {
  const userRepository = AppDataSource.getRepository(User);

  const createUser = userRepository.create(userData);
  await userRepository.save(createUser);

  // colocar o serializer pra nao exibir a senha

  return createUser;
};

export default createUserService;
