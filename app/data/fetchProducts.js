import { mongoConnect } from "../config/db.connect.js";
import { ProductModel } from "../models/products.model.js";

export const fetchProducts = async () => {
  try {
    mongoConnect();
    const products = await ProductModel.find();
    return products;
  } catch (error) {
    console.log(error);
  }
};
