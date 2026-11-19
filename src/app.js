import express from "express";
import userRouter from "./routers/userRouter.js";

const app = express();

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
