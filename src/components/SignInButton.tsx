"use client";

import { Login } from "@/auth/auth.action";

export default function SignInButton() {
  return (
    <button onClick={() => Login()} className="cursor-pointer">
      Github Login
    </button>
  );
}
