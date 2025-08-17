import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Kullanıcı Adınız", type: "text", placeholder: "" },
        password: { label: "Şifre", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const { username, password } = credentials!;
        const res = await fetch(
          "https://maestro-api-dev.secil.biz/Auth/Login",
          {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
