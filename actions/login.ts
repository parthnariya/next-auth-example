"use server";

import { LoginSchema } from "@/schemas/LoginSchema";
import { z } from "zod";

export function login(values: z.infer<typeof LoginSchema>) {
  console.log(values);
}
