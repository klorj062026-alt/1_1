import "dotenv/config";

import express from "express";
import userRouter from "./routers/userRouter.js";
import sequelize from "./config/database.js";

const app = express();

//TESTE om database kan kobles til- skal fjernes etterpå...

// try {
//   sequelize.authenticate();
//   console.log("Database connected");
// } catch (err) {
//   console.log("unnable to connect to database", err);
// }

try {
  await sequelize.authenticate();
  console.log("Database connected");
} catch (err) {
  console.error("Kunne ikke koble til databasen:", err.message);
  process.exit(1);
}

// Legg til støtte for å lese json data fra body

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ data: "Hello World" });
});

// Våre routes
// localhost:tall/users RESTful principle
app.use("/users", userRouter);

// node app.js

// Vårt første endepunkt
// HTTP metoder: GET, POST, PUT, PATCH, DELETE

export default app;
