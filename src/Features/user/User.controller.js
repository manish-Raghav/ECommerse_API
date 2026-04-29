import usermodel from "./User.model.js";
import validator from "validator";
import jwt from "jsonwebtoken";
export default class Usercontroller {
  async usersign(req, res) {
    console.log("manish raghav from controller ", req.body);
    const { name, email, password } = req.body;

    const dt = { name, email, password };

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    const signuser = await usermodel.signin(dt);
    return res
      .status(201)
      .json({ message: " User signin successfully ", data: signuser });
  }
  usersignup(req, res) {
    const { email, password } = req.body;
    console.log("login body from controller ", req.body);
    const returnsignup = usermodel.signup(email, password);
    console.log("res from login controller", returnsignup);

    if (returnsignup) {
      const token = jwt.sign(
        { userid: returnsignup.id, email: returnsignup.email },
        "garlic-lazy-gesture",
        {
          expiresIn: "1hr",
        },
      );
      res.status(200).send(token);
    } else {
      res.status(404).send("some problem in your data");
    }
  }
}
