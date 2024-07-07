import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  adapter: PrismaAdapter(prisma) as Adapter,
  theme: {
    logo: "/logo.png",
  },
  trustHost: true,
  callbacks: {
    async session({session, user}) {
      session.user.role = user.role;
      return session
    }
  }
});
