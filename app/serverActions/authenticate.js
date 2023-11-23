"use server";

import { signIn } from "../auth.js";

export const authenticateLogin = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
