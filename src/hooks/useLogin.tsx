import useSupabaseBrowser from "@/lib/supabase-client";
import { loginSchema } from "@/schemas/formSchemas";
import { login } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import * as z from "zod";

export default function useLogin() {
  const supabase = useSupabaseBrowser();
  const { mutate: signIn, status } = useMutation({
    mutationFn: async (data: z.infer<typeof loginSchema>) => {
      const { data: user, error } = await login(supabase, data);
      if (error) throw new Error(error.message);
      return user;
    },
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
