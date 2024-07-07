import { auth, signIn } from "@/auth";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggler } from "./theme-toggler";
import UserButton from "./user-button";
import getSession from "@/lib/get-session";

export const NavBar = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          Expenses Tracker
        </Link>

        <ThemeToggler />

        {user ? <UserButton user={user} /> : <SignInButton />}
      </nav>
    </header>
  );
};

const SignInButton = () => {
  return (
    <form
      action={async () => {
        "use server";

        await signIn();
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
  );
};
