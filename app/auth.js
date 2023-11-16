import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config.js";
import { mongoConnect } from "./config/db.connect.js";
import { UserModel } from "./models/users.model.js";

function comparePasswords(plainTextPassword, storedPlainTextPassword) {
  // Perform a simple string comparison
  return plainTextPassword === storedPlainTextPassword;
}

const login = async (credentials) => {
  try {
    await mongoConnect();
    const user = await UserModel.findOne({ username: credentials.username });

    if (!user || !user.isAdmin)
      throw new Error("Wrong credentials: User not found or not an admin");

    // Example usage
    const isPasswordCorrect = comparePasswords(
      credentials.password,
      user.password
    );
    /*  const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    ); */

    if (!isPasswordCorrect)
      throw new Error("Wrong credentials: Incorrect password");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  // Add infos (username & img instead of user's email) to session
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
