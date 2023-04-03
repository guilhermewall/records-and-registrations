import AppDataSource from "../../data-source";
import { compare } from "bcryptjs";
import "dotenv/config";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import jwt from "jsonwebtoken";

const createSessionService = async ({ email, password }: any) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("incorrect email or password", 403);
  }

  // if (user.isActive === false) {
  //   throw new AppError("User is nor active", 400);
  // }

  // compare pega o hash da senha e decoda com a senha passada no body da requisição

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("incorrect email or password", 403);
  }

  const token = jwt.sign(
    {
      email: user.email,
    },
    process.env.SECRET_KEY!,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return { token: token };
};

export default createSessionService;
