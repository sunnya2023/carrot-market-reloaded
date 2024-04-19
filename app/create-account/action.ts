"use server";
import { z } from "zod";

//data 조건
const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);

const checkUsername = (username: string) => {
  return !username.includes("pot");
};
const checkPassword = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;
const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string",
        required_error: "Username is required",
      })
      .min(3, "way too short!!")
      .max(10, "That is too long")
      .trim()
      .refine(checkUsername, "No pot allowed"),

    email: z.string().email().trim().toLowerCase(),
    password: z
      .string()
      .min(4)
      .regex(
        passwordRegex,
        "a password must have lowercase, UPPERCASE, a number and special characters"
      ),
    confirm_password: z.string().min(4),
  })
  .refine(checkPassword, {
    message: "Passwords are not the same! ",
    path: ["confirm_password"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
