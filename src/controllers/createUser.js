// import { users } from "../store/users.store.js";
import sequelize from "../config/database.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  await sequelize.query(
    "INSERT INTO t_Users (name, email, password) VALUES (:name, :email, :password)",
    { replacements: { name, email, password } },
  );

  res.status(201).json({ message: "user was created!" });
};

// users.push({
//   username,
//   email,
// });
