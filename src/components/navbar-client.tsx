"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggler } from "./theme-toggler";
import UserButton from "./user-button";
import { signIn, useSession } from "next-auth/react";

export const NavBarClient = () => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          Expenses Tracker
        </Link>

        <ThemeToggler />

        {user && <UserButton user={user} />}
        {!user && session.status !== "loading" && <SignInButton />}
      </nav>
    </header>
  );
};

const SignInButton = () => {
  return <Button onClick={async () => await signIn()}>Sign in</Button>;
};
