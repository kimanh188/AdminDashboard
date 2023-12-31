import { mongoConnect } from "../config/db.connect.js";
import { ProductModel } from "../models/products.model.js";

export const fetchProducts = async (query, page) => {
  const regex = new RegExp(query, "i");

  const resultPerPage = 5;

  try {
    mongoConnect();
    const countTotal = await ProductModel.find({
      title: { $regex: regex },
    }).count();

    const products = await ProductModel.find({
      title: { $regex: regex },
    })
      .sort({ createdAt: -1 }) //sort: newest first
      .limit(resultPerPage)
      .skip(resultPerPage * (page - 1));
    return { countTotal, products };
  } catch (error) {
    console.log(`Failed to fetch products: `, error);
    throw new Error("Failed to fetch products");
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    mongoConnect();
    const product = await ProductModel.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch the product");
  }
};
