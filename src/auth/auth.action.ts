"use server";

import { signIn, signOut } from "./auth";

export async function Login() {
  await signIn("github", { redirectTo: "/" });
}

export async function LogOut() {
  await signOut({ redirectTo: "/" });
}
