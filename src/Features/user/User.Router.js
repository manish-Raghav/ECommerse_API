import express from "express";
import Usercontroller from "./User.controller.js";
const app = express();
const routt = express.Router();

const obj = new Usercontroller();

routt.post("/signin", (req, res) => obj.usersign(req, res));
routt.post("/signup", obj.usersignup);

export default routt;
