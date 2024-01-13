import { logout } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useLogout() {
  const router = useRouter();
  const { mutate: logoutFn } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      location.reload();
      toast.success("Logout Successfull");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { logoutFn };
}
