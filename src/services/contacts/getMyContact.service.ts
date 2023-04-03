import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";

const getMyContactService = async (userId: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({
    relations: {
      contacts: true,
    },
    where: {
      id: userId,
    },
  });

  return user!.contacts;
};

export default getMyContactService;
