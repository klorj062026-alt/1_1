import { users } from "../store/users.store.js";

export const deleteUser = (req, res) => {
  const { username } = req.params;

  // params er en slags mappestruktur(den siste /user/navnher)

  const index = users.findIndex((user) => user.username === username);
  users.splice(index, 1);
  res.status(200).json({ message: "User was deleted" });
};
