import { getSupabaseBrowserClient } from "@/lib/supbase-client";
import { loginSchema, registerSchema } from "@/schemas/formSchemas";
import * as z from "zod";

const supabase = getSupabaseBrowserClient();

export const signUp = async (values: z.infer<typeof registerSchema>) => {
  let { data, error } = await supabase.auth.signUp({
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
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const login = async (values: z.infer<typeof loginSchema>) => {
  let { data, error } = await supabase.auth.signInWithPassword(values);
  if (error) throw new Error(error.message);

  return data;
};

export const logout = async () => {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);

  return {};
};

export const getSession = async () => {
  let {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  if (error) {
    throw new Error(error.message);
  }
  return session;
};
