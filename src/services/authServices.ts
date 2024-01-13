import { TypedSupabaseClient } from "@/lib/types";
import { loginSchema, registerSchema } from "@/schemas/formSchemas";
import * as z from "zod";

export const signUp = (
  client: TypedSupabaseClient,
  values: z.infer<typeof registerSchema>
) => {
  return client.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: {
        first_name: values.first_name,
        last_name: values.last_name,
      },
      emailRedirectTo: `${location.origin}/auth/callback`,
    },
  });
};

export const login = (
  client: TypedSupabaseClient,
  values: z.infer<typeof loginSchema>
) => {
  return client.auth.signInWithPassword(values);
};

export const logout = (client: TypedSupabaseClient) => {
  return client.auth.signOut();
};

export const getSession = (client: TypedSupabaseClient) => {
  return client.auth.getSession();
};

export const getProfile = (client: TypedSupabaseClient, id: string) => {
  return client.from("profiles").select("*").eq("id", id).single();
};

export const updateProfile = async (
  client: TypedSupabaseClient,
  profile: any
) => {
  return client.from("profiles").update(profile).eq("id", profile.id).select();
};
