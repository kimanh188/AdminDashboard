import { mongoConnect } from "../config/db.connect.js";
import { UserModel } from "../models/users.model.js";

export const fetchUsers = async (query) => {
  const regex = new RegExp(query, "i"); // Create a case-insensitive regular expression from the query

  try {
    mongoConnect();
    const users = await UserModel.find({ username: { $regex: regex } }); //find users whose username matches the regular expression
    return users;
  } catch (error) {
    console.log(`Failed to fetch users: `, error);
  }
};
