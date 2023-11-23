# Admin Dashboard

_Work in Progress_

## Project Overview

This Admin Dashboard project is a Next.js application that provides a user-friendly interface for managing users and products. It was developed as a self-learning exercise to gain hands-on experience with Next.js.

## Key Features

The Admin Dashboard offers the following features:

- **Authentication:** Secure access to admin functionalities.

- **Dashboard Homepage:** Comprehensive display of admin dashboard.

- **User and Product Management:** Efficient users and products management functionalities, including

  - Displaying user/product list
  - Searching for specific users/products
  - Viewing user/product details
  - Adding new users/products
  - Editing user/product information
  - Deleting users/products

- **Server Actions:** Implement server-side actions for data manipulation.

## Technologies Used

- Next.js: React-based framework for server-side rendering
- NextAuth.js: Authentication platform for Next.js applications
- Mongoose: Object Document Mapper (ODM) for MongoDB
- bcryptjs: Password hashing library
- faker-js: Data generation library

## Getting Started

**Access the Live Site:**
You can view my deployed version of the Admin Dashboard at this [Live Site](https://admin-dashboard-nine-lilac.vercel.app/). To log in, use the following credentials:

- _Username:_ testAdmin
- _Password:_ test12345

**Or, run the Development Server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learning Highlights

Some examples of what I learnt through this project:

- **Manipulating Query Parameters:** Utilized Next.js hooks, including usePathname and useSearchParams, for efficient manipulation of query parameters.

- **Debouncing Search Functionality:** Employed the useDebouncedCallback hook from the use-debounce library to debounce search functionality, preventing that the search function will not be fired too often and ensuring a smoother user experience.

- **Password Hashing:** Implemented password hashing using the bcrypt library, enhancing the security of user authentication.

- **NextAuth.js Integration:** Leveraged NextAuth.js for authentication processes, providing secure access to admin functionalities.

- **Mongoose Practice:** Deepened understanding of MongoDB interactions by practicing with Mongoose.

## Tutorial Source & Customized Features

This project was developed following the tutorial from the [Lama Dev](https://www.youtube.com/watch?v=cBg6xA5C60s&t=215s&ab_channel=LamaDev) YouTube channel as part of my self-learning journey. While the project's design and structure closely follow the tutorial, I've made several modifications and additions:

- **Folder Structure:** Reorganized project folder structure

- **Data Generation:** Used faker-js package to generate user and product data for testing purposes.

- **Homepage Configuration:** Set login page as the default homepage.

- **Pagination Customization:** Tailored pagination with page number display.
