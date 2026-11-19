import { users } from "../store/users.store.js";

export const createUser = (req, res) => {
  const { username, email } = req.body;

  users.push({
    username,
    email,
  });

  res.status(201).json({ message: "user was created!" });
};
