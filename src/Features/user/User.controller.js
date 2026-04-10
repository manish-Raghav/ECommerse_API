import usermodel from "./User.model.js";
import validator from "validator";
import jwt from "jsonwebtoken";
export default class Usercontroller {
  usersign(req, res) {
    console.log("manish raghav from", req.body);
    const { name, email, password } = req.body;

    const dt = { name, email, password };

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    const signuser = usermodel.signin(dt);

    const token = jwt.sign(
      { userid: signuser.id, email: usersign.email },
      "garlic-lazy-gesture",
      {
        expiresIn: "1hr",
      },
    );
    res.status(200).send(token);
  }
  usersignup(req, res) {
    const [email, password] = req.body;

    const returnsignup = usermodel.signup(email, password);
    if (returnsignup) {
      res.status(201).send("User is Signup");
    }
  }
}
