import { connectDB } from "@/lib/dbconnect";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    rolling: false,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Email and password are required.");
        }

        try {
          const db = await connectDB(); // Connect to the database
          const currentUser = await db.collection("users").findOne({ email });

          if (!currentUser) {
            throw new Error("User not found.");
          }

          // **Plain-text password verification**
          if (password !== currentUser.password) {
            throw new Error("Invalid password.");
          }

          // Return the user object (only fields needed for the session)
          return {
            id: currentUser._id.toString(),
            email: currentUser.email,
            name: currentUser.name,
          };
        } catch (error) {
          console.error("Error during login:", error.message);
          throw new Error("Login failed.");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom login page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          name: token.name,
        };
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
