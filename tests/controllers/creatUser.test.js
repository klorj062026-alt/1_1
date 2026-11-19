import { describe, it, expect } from "vitest";
// import { createUser } from "../../src/controllers/createuser.js";
import request from "supertest";
import app from "../../src/app.js";

describe("POST: /users", () => {
  it("Should create a user", async () => {
    const payload = {
      username: "Admin",
      email: "admin@admin.no",
    };
    const response = await request(app).post("/users/").send(payload);
    expect(response.status).toBe(201);
  });
});
