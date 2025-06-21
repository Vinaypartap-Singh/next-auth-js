"use client";

import { LogOut } from "@/auth/auth.action";

export default function SignOutButton() {
  return <button onClick={() => LogOut()}>SignOut</button>;
}
