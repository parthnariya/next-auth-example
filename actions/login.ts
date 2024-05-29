"use server";

import { LoginSchema } from "@/schemas/LoginSchema";
import { z } from "zod";

export async function login(values: z.infer<typeof LoginSchema>) {
  const validationFields = LoginSchema.safeParse(values);
  if (!validationFields) {
    return {
      error: "Invalid Fields",
    };
  }
  return {
    success: "Email Sent",
  };
}
