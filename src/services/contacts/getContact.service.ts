import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const getContactService = async () => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const contacts = contactRepo.find({
    relations: {
      user: true,
    },
  });

  return contacts;
};

export default getContactService;
