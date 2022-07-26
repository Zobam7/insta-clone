import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // secret: process.env.SECRET,
      secret:dd306d827283db29cdd3fbfbe9f38125
    }),
    // ...add more providers here
  ],
  pages: {
      signIn: "/auth/signin"
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name.split(" ").join("").toLowerCase()
      session.user.uid = token.sub
      return session
    }
  }
})