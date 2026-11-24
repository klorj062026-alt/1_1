// ORM object relational mapping som heter sequelize

// Tedious -- TOLK

import { Sequelize } from "sequelize";
import "dotenv/config";

// console.log("Passordet er 1234:", process.env.DB_PASSWORD === "1234");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
);

export default sequelize;
