import z from "zod";

export const updateUserSchema = z.object({
  body: z.object({
    username: z
      .string({ error: "username must be a valid username(string)" })
      .optional(),
    email: z.email({ error: "Email must be a valid email" }).optional(),
  }),

  //   Her må du sende username og email, men username og email, skal være optional, så vi trender en ting til
});
