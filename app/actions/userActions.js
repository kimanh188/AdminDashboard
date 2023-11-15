"use server";

import { mongoConnect } from "../config/db.connect.js";
import { UserModel } from "../models/users.model.js";

export const addUser = async (formAddNewUser) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formAddNewUser);

  try {
    mongoConnect();

    const newUser = new UserModel({
      username,
      email,
      password,
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
};
