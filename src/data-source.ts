import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/user.entity";
import { Contact } from "./entities/contact.entity";
import { initialUserContact1679509906237 } from "./migrations/1679509906237-initialUserContact";
import { relationsUserContact1679510564437 } from "./migrations/1679510564437-relationsUserContact";
import { userUniqueColumnEmailAndCpf1680296139201 } from "./migrations/1680296139201-userUniqueColumnEmailAndCpf";
import { alterContactIsActive1680491043728 } from "./migrations/1680491043728-alterContactIsActive";

const setDataSourceConfig = (): DataSourceOptions => {
  if (process.env.NODE_ENV === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [],
    };
  }

  return {
    type: "postgres",
    host: process.env.PGHOST!,
    port: parseInt(process.env.PGPORT!),
    username: process.env.PGUSER!,
    password: process.env.PGPASSWORD!,
    database: process.env.PGDATABASE!,
    logging: true,
    synchronize: false,
    entities: [Contact, User],
    migrations: [
      initialUserContact1679509906237,
      relationsUserContact1679510564437,
      userUniqueColumnEmailAndCpf1680296139201,
      alterContactIsActive1680491043728,
    ],
  };
};
// falta preencher as entities e migrations

const dataSourceConfig = setDataSourceConfig();
export default new DataSource(dataSourceConfig);
