"use server";

import { RegisterSchema } from "@/schemas/RegisterSchema";
import { z } from "zod";

export async function register(values: z.infer<typeof RegisterSchema>) {
  const validationFields = RegisterSchema.safeParse(values);
  if (!validationFields) {
    return {
      error: "Invalid Fields",
    };
  }
  return {
    success: "Email Sent",
  };
}
