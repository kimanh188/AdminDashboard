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

    const users = await UserModel.find({ username: { $regex: regex } })
      .limit(resultPerPage)
      .skip(resultPerPage * (page - 1)); //find users whose username matches the regular expression
    return { countTotal, users };
  } catch (error) {
    console.log(`Failed to fetch users: `, error);
  }
};
