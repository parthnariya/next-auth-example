import * as z from "zod";
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Minimum 6 character required",
    }),
  name: z
    .string({
      required_error: "Name is Required",
    })
    .min(1, {
      message: "Name is required",
    }),
});
