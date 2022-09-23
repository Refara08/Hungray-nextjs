import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

import dbConnect from "../../../utils/mongo";
import Admin from "../../../model/Admin";
import { verifyPassword } from "../../../utils/encrypt-auth";

export const authOptions = {
  providers: [
    Credentials({
      async authorize(credentials) {
        await dbConnect();

        const admin = await Admin.findOne({ email: credentials.email });

        if (!admin) {
          throw new Error("your email is not registered....");
        }

        const isValid = await verifyPassword(
          credentials.password,
          admin.password
        );

        if (!isValid) {
          throw new Error("wrong password...");
        }

        return { email: admin.email };
      },
    }),
  ],
};

export default NextAuth(authOptions);
