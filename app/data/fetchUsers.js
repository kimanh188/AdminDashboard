import { mongoConnect } from "../config/db.connect.js";
import { UserModel } from "../models/users.model.js";

export const fetchUsers = async (query, page) => {
  const regex = new RegExp(query, "i"); // Create a case-insensitive regular expression from the query

  const resultPerPage = 5;

  try {
    mongoConnect();
    const countTotal = await UserModel.find({
      username: { $regex: regex },
    }).count();

    const users = await UserModel.find({ username: { $regex: regex } }) //find users whose username matches the regular expression
      .sort({ createdAt: -1 }) // Sort (newest first)
      .limit(resultPerPage)
      .skip(resultPerPage * (page - 1));
    return { countTotal, users };
  } catch (error) {
    console.log(`Failed to fetch users: `, error);
    throw new Error("Failed to fetch users");
  }
};

export const fetchSingleUser = async (id) => {
  console.log(id);

  try {
    mongoConnect();
    const user = await UserModel.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch the user");
  }
};
