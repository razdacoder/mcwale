import { loginSchema } from "@/schemas/formSchemas";
import { loginUser } from "@/services/actions";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

export default function useLogin() {
  const router = useRouter();
  const { mutate: loginFn } = useMutation({
    mutationFn: (values: z.infer<typeof loginSchema>) => loginUser(values),
    onSuccess: () => {
      toast.success("Login Successful");
      router.push("/admin");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { loginFn };
}
