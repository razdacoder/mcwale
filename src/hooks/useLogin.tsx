import { loginSchema } from "@/schemas/formSchemas";
import { login } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import * as z from "zod";

export default function useLogin() {
  const { mutate: signIn, status } = useMutation({
    mutationFn: (data: z.infer<typeof loginSchema>) => login(data),
    onSuccess: () => {
      toast.success("Login successfull");
      location.reload();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { signIn, status };
}
