import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/Ecommerce";
let myclient;

export const Mongoconnect = async () => {
  try {
    const clientInstant = await MongoClient.connect(url);
    myclient = clientInstant;
    console.log("Data connected succesfully");
  } catch (err) {
    console.log("Error in connecting with mongo");
  }
};
export const getDB = () => {
  return myclient.db();
};
//  {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
