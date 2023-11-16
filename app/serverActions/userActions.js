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
    throw new Error("Failed to create user. Please try again");
  }

  revalidatePath("/dashboard/users/");
  redirect("/dashboard/users/");
};

export const updateUser = async (formUserDetail) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formUserDetail);

  try {
    mongoConnect();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await UserModel.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formDeleteUser) => {
  const { userId } = Object.fromEntries(formDeleteUser);

  try {
    mongoConnect();
    await UserModel.findByIdAndDelete(userId);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }

  revalidatePath("/dashboard/products");
};
