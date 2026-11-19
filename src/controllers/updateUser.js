import { users } from "../store/users.store.js";

export const updateUser = (req, res) => {
  const id = req.params.username;

  const { username, email } = req.body;

  const user = users.find((user) => user.username === id);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  user;
  if (email) {
    user.email = email;
  }
  if (username) {
    user.username = username;
  }

  res.status(200).json({ data: "User was updated" });
};
