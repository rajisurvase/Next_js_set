import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        // find out user from db
        if (email !== "piraji@gmail.com" || password !== "1234") {
          throw new Error("invalid credentials");
        }

        // if everything is fine
        return {
          id: "1234",
          name: "Piraji survase",
          email: "piraji@gmail.com",
          role: "admin",
        };
      },
    }),
  ],
    pages: {
      signIn: "/auth/login",
      // error: '/auth/error',
      // signOut: '/auth/signout'
    },
})

export { handler as GET, handler as POST }

