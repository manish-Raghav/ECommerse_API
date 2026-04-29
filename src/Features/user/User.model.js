import { getDB } from "../../Config/Db.js";

export default class usermodel {
  constructor(email, password, name, id) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static async signup(email, password) {
    try {
      const db = getDB();
      const collection = db.collection("users");
      console.log(collection, "this is data connection");

      const dt = await collection.findOne({ email: "mani@gmail.com" });

      console.log("signup --> ", dt);

      return dt;
    } catch (error) {
      console.log("here is problem in login", error);
    }
  }
  static async signin(userdata) {
    try {
      const dt = getDB();
      const collection = dt.collection("users");

      console.log("from signinmodule ", userdata);

      await collection.insertOne(userdata);
    } catch (err) {
      throw new ApplicationError("Something went wrong ", 503);
    }

    return userdata;
  }

  static getAll() {
    return User;
  }
}

const User = [
  {
    id: 1,
    name: "manish raghav",
    email: "mani@gmail.com",
    password: "1234",
  },
];
