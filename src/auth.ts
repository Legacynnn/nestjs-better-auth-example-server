import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { admin } from "better-auth/plugins"

const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: [
    "http://localhost:3000",
  ],
  plugins: [
    admin({
      adminUserIds: ["SWp4kVpPGfUvuXbGoso3hpPXyIWxg6EI"]
    }) 
  ],
  emailAndPassword: {
    enabled: true,
    async sendResetPassword(data, request) {
    },
  },
});