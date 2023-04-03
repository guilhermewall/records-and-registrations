import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const updatedContactService = async (userId: string, data: any) => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const userRepo = AppDataSource.getRepository(User);

  const contact = await contactRepo.findOne({
    relations: {
      user: true,
    },
    where: {
      id: data.id,
    },
  });

  const user = await userRepo.findOneBy({ id: userId });

  if (!contact) {
    throw new AppError("contact not found", 401);
  }

  if (contact.user.id !== user!.id) {
    throw new AppError("you do not have permission to modify", 403);
  }

  const updatedContact = contactRepo.create({
    ...contact,
    ...data,
  });

  await contactRepo.save(updatedContact);

  return updatedContact;
};

export default updatedContactService;
