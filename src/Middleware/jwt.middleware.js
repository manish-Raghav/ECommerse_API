import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  //1 -Read the Tocken

  // const token = req.headers["Authorization"];
  const token = req.headers["authorization"];

  // 2- if no token return the error

  if (!token) return res.status(401).send("unautherized by manish");

  // 3- check if tocken is valid
  try {
    const paylod = jwt.verify(token, "garlic-lazy-gesture");
    console.log(paylod);
  } catch (err) {
    //   4- return error
    return res.status(401).send("unautherized");
  }

  // 5- call next middleware

  next();
};
export default jwtAuth;
