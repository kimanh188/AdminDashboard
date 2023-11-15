import { mongoConnect } from "../config/db.connect.js";
import { ProductModel } from "../models/products.model.js";

export const fetchProducts = async (query) => {
  const regex = new RegExp(query, "i");

  try {
    mongoConnect();
    const products = await ProductModel.find({ title: { $regex: regex } });
    return products;
  } catch (error) {
    console.log(error);
  }
};
