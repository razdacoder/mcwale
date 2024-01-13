import * as z from "zod";

export const registerSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
