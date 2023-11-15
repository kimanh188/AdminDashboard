"use server";

import { signIn } from "../auth.js";

export const authenticateLogin = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    return "Wrong credentials";
  }
};
