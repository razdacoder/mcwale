import { TypedSupabaseClient } from "@/lib/types";

export const getSetting = (client: TypedSupabaseClient) => {
  return client.from("settings").select("*").single();
};
