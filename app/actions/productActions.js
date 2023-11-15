"use server";

import { revalidatePath } from "next/cache.js";
import { redirect } from "next/navigation.js";
import { mongoConnect } from "../config/db.connect.js";
import { ProductModel } from "../models/products.model.js";

export const addProduct = async (formAddNewProduct) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formAddNewProduct);

  try {
    mongoConnect();

    const newProduct = new ProductModel({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (error) {
    console.log(`Failed to create product `, error);
    throw new Error("Failed to create product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
