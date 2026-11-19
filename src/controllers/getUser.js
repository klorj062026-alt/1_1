import { users } from "../store/users.store.js";

export const getUser = (req, res) => {
  const { username } = req.params;
  // params = path parameters = api.pokemon.no/pokemon/"BULBASAUR"
  // query params api.pokemon.no"?LIMIT=1000"
  const user = users.find((user) => user.username === username);
  res.status(200).json({ data: user });
};
