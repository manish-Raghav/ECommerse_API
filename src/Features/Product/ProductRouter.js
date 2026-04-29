import express from "express";
import Productcontroller from "./products.controller.js";
import upload from "../../Middleware/Fileuploded.middleware.js";
const Rott = express.Router();
const obj = new Productcontroller();

Rott.get("/", obj.getallproducts);
Rott.post("/", upload.single("imgurl"), obj.addproduct);
Rott.get("/filter", obj.filterproduct);
Rott.get("/:id", obj.getoneproduct);
Rott.post("/rateproduct", obj.rateproduct);

export default Rott;
