import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const getUserService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    relations: {
      contacts: true,
    },
  });

  return users;
};

export default getUserService;
