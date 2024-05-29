"use server";

import { RegisterSchema } from "@/schemas/RegisterSchema";
import { z } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/db";
import { getUserByEmail } from "@/lib/utils";

export async function register(values: z.infer<typeof RegisterSchema>) {
  const validationFields = RegisterSchema.safeParse(values);
  if (!validationFields.data || validationFields.error) {
    return {
      error: "Invalid Fields",
    };
  }

  const { email, name, password } = validationFields.data;

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return {
      error: "Email already in use!!",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return {
    success: "User Created!",
  };
}
