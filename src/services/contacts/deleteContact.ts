import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deleteContactService = async (userId: any, emailContact: any) => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const contact = await contactRepo
    .createQueryBuilder("contacts")
    .innerJoinAndSelect("contacts.user", "user")
    .where("contacts.email = :email", { email: emailContact })
    .andWhere("user.id = :id", { id: userId })
    .select("contacts")
    .getOne();

  if (!contact) {
    throw new AppError("You are not contact", 409);
  }

  if (!contact.isActive) {
    throw new AppError("You are not contact", 409);
  }

  contact.isActive = false;

  await contactRepo.save(contact);

  return {
    message: "concluido",
  };
};

export default deleteContactService;
