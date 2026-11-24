// import { users } from "../store/users.store.js";
import sequelize from "../config/database.js";

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  // params er en slags mappestruktur(den siste /user/navnher)

  await sequelize.query(`DELETE FROM t_Users WHERE id = :id`, {
    replacements: { id },
  });

  res.status(200).json({ message: "User was deleted" });
};

// const index = users.findIndex((user) => user.username === username);
// users.splice(index, 1);
