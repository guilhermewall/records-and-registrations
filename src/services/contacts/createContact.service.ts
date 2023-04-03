import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";

const createContactService = async (
  data: any,
  userId: string
): Promise<any> => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ id: userId });
  console.log("******", user);

  const newContact = contactRepo.create({
    ...data,
    user: user,
  });
  await contactRepo.save(newContact);

  return { message: "contact add" };
};

export default createContactService;

// tirar as senhas q retornam no banco!!!!!!!!!!!!!!!!
