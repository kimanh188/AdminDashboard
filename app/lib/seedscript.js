import mongoose from "mongoose";
import { mongoConnect } from "../config/db.connect.js";
import { faker } from "@faker-js/faker";
import { UserModel } from "../models/users.model.js";
import { ProductModel } from "../models/products.model.js";

await mongoConnect();

console.log("Creating data");

async function createUsersData(docsToCreate) {
  for (let i = 0; i < docsToCreate; i++) {
    await UserModel.create({
      username: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password({ length: 8 }),
      img: faker.image.url(),
      isAdmin: faker.datatype.boolean({ probability: 0.1 }),
      isActive: faker.datatype.boolean({ probability: 0.9 }),
      phone: faker.phone.number(),
      address: faker.location.city(),
    });
    console.log(`UserDocument ${i + 1} created`);
  }
}

async function createProductsData(docsToCreate) {
  for (let i = 0; i < docsToCreate; i++) {
    await ProductModel.create({
      title: faker.commerce.productName(),
      desc: faker.commerce.productDescription(),
      price: faker.commerce.price({ min: 50, max: 1200 }),
      stock: faker.number.int({ min: 1, max: 100 }),
      img: "/noproduct.jpg",
      color: faker.color.human(),
      size: "",
    });
    console.log(`ProductDocument ${i + 1} created`);
  }
}

try {
  await createUsersData(5);
  await createProductsData(5);
  console.log("Created documents");
} catch (error) {
  console.log(error);
} finally {
  mongoose.disconnect();
}
