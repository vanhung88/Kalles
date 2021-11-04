import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Tuan Doe",
    email: "Tuan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Hung Van",
    email: "Hung@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
