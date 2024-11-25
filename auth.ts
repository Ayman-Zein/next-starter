import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials || {};

        // Custom login validation (call api here and return user object if valid)
        if (email === "ayman@gmail.com" && password === "12345") {
          return {
            id: "1",
            name: "Ayman",
            email: "ayman@gmail.com",
          };
        }

        // Return null if invalid credentials
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  pages: {
    signIn: "/login", // Optional: Customize the sign-in page
  },
});
