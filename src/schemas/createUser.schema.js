import z from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z.string({ error: "name must be a valid username(string)" }),
    email: z.email({ error: "Email must be a valid email" }),
  }),
});
