"use client";
import { registerSchema } from "@/schemas/formSchemas";
import { signUp } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import * as z from "zod";

export default function useCreateUser() {
  const { mutate: createUser, status: creating } = useMutation({
    mutationFn: (data: z.infer<typeof registerSchema>) => signUp(data),
    onSuccess: () => {
      toast.success("Account created successfully");
      location.reload();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { createUser, creating };
}
