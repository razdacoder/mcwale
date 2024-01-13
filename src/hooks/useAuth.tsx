import { getSession } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

export default function useAuth() {
  const { data } = useQuery({
    queryKey: ["auth"],
    queryFn: getSession,
  });
  return { user: data?.user, isAuthenticated: !!data };
}
