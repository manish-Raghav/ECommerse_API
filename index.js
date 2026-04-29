import express from "express";
// const { default: router } = require('./Product/ProductRouter');
import Rott from "./src/Features/Product/ProductRouter.js";
import bodyParser from "body-parser";
import routt from "./src/Features/user/User.Router.js";
import jwtAuth from "./src/Middleware/jwt.middleware.js";
import { Mongoconnect } from "./src/Config/Db.js";

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api/products", jwtAuth, Rott);
server.use("/api/user", routt);

server.listen(3000, () => {
  console.log("server is running on 3000..");
  Mongoconnect();
});
