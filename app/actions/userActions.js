"use server";

import { revalidatePath } from "next/cache.js";
import { redirect } from "next/navigation.js";
import bcrypt from "bcrypt";
import { mongoConnect } from "../config/db.connect.js";
import { UserModel } from "../models/users.model.js";

export const addUser = async (formAddNewUser) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formAddNewUser);

  try {
    mongoConnect();

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(`Failed to create user `, error);
    throw new Error("Failed to create user");
  }

  revalidatePath("/dashboard/users/");
  redirect("/dashboard/users/");
};
