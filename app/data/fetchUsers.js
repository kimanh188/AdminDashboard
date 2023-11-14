import { mongoConnect } from "../config/db.connect.js";
import { UserModel } from "../models/users.model.js";

export const fetchUsers = async () => {
  try {
    mongoConnect();
    const users = await UserModel.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};
