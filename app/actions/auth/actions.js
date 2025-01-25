"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function signup(formData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/signin");
}

export async function signin(formData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signout() {
  const supabase = createClient();

  let { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  redirect("/");
}

export async function getUser() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  return data.user;
}