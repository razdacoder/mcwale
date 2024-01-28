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

export const reviewSchema = z.object({
  stars: z.string().max(1),
  first_name: z
    .string()
    .min(2, { message: "Name must be at leat 2 characters" }),
  last_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  review: z.string().min(1),
  image: z.string(),
});

export const appointmentSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  last_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  address: z
    .string()
    .min(2, { message: "Address must be at least 2 characters" }),
  email: z.string().email(),
  phone_number: z
    .string()
    .max(12, { message: "Phone numbers can't be more than 12 characters" }),
  date: z.date(),
  hh: z.string().max(2),
  mm: z.string().max(2),
  period: z.string().max(2),
});

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email(),
  message: z.string().min(1, { message: "Message can not be empty" }).max(300),
});
