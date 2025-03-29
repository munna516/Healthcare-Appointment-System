import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "enter eamil" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/login`,
            {
              // Use absolute URL
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            }
          );

          if (!res.ok) {
            return null;
          }

          const user = await res.json();

          return user || null;
        } catch (error) {
          console.error("Fetch error:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/not-found",
  },
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     if (user) {
  //       const { email, name } = user;

  //       await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/social`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email,
  //           name,
  //         }),
  //       });
  //     }
  //     return true;
  //   },
  // },

  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider) {
        token.provider = account.provider;
      }
      return token;
    },
    async session({ session, token }) {
      session.provider = token.provider;
      return session;
    },
    async signIn({ user, account }) {
      if (account.provider === "google") {
        // Only call social API for Google logins
        await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/social`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            name: user.name,
            image: user.image,
          }),
        });
      }
      return true;
    },
  },
};
