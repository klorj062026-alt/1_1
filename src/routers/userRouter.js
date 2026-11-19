import express from "express";
import { createUser } from "../controllers/createuser.js";
import { deleteUser } from "../controllers/deleteUser.js";
import { getAllUsers } from "../controllers/getAllUsers.js";
import { getUser } from "../controllers/getUser.js";
import { updateUser } from "../controllers/updateUser.js";
import { validate } from "../middlewares/validate.js";

import { createUserSchema } from "../schemas/createUser.schema.js";
import { updateUserSchema } from "../schemas/updateUserSchema.js";

const router = express.Router();

// POST: localhost:3000/users
router.post("/", validate(createUserSchema), createUser);

// localhost/users/noesomkanendres(f.eks username)
router.delete("/:username", deleteUser);

router.get("/", getAllUsers);

router.put("/:username", validate(updateUserSchema), updateUser);

export default router;

// Utfordring - putt getUser i controllers.
router.get("/:username", getUser);
