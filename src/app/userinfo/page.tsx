import { auth } from "@/auth/auth";
import SignOutButton from "@/components/SignOutButton";
import Image from "next/image";

export default async function UserInfo() {
  const session = await auth();
  return (
    <div>
      <p>UserName: {session?.user?.name}</p>
      <p>UserName: {session?.user?.email}</p>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          width={60}
          height={60}
          alt="User Image"
        />
      )}

      <SignOutButton />
    </div>
  );
}
