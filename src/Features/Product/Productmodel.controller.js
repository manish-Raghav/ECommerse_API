import usermodel from "../user/User.model.js";

export default class Productmodel {
  constructor(id, name, desc, price, imgurl, sizes, category) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imgurl = imgurl;
    this.category = category;
    this.price = price;
    this.sizes = sizes;
  }

  static getalldata() {
    return data;
  }

  static adddata(product) {
    product.id = data.length + 1;
    data.push(product);
    return product;
  }

  static getsingledata(id) {
    console.log("model id is", id);
    const dt = data.find((val) => val.id === id);
    return dt;
  }

  static profilter(min, max, category) {
    const result = data.filter((val) => {
      return (
        data.price >= min && data.price <= max && data.category == category
      );
    });
    return result;
  }

  static rateProduct(userId, productId, prating) {
    const dt = usermodel.getAll;
    const user = dt.find((user) => user.id == userId);
    if (!user) return "user not found";

    const myproduct = data.find((p) => p.id == productId);

    if (!myproduct) return "product n not found";

    if (!myproduct.ratings) {
      myproduct.ratings = [];
      myproduct.ratings.push({ userId: userId, rating: prating });
    } else {
      const existratingind = dt.ratings.findIndex((r) => r.userId == userId);
      if (existratingind >= 0) {
        myproduct.ratings[existratingind] = {
          userId: userId,
          rating: prating,
        };
      } else {
        myproduct.ratings.push({
          userId: userId,
          rating: prating,
        });
      }
    }
  }
}

var data = [
  new Productmodel(
    "1",
    "product1",
    "Description for product 10",
    19.99,
    "images",
    "Electronic",
  ),
  new Productmodel(
    "2",
    "product1",
    "Description for product 10",
    19.99,
    "images",
    ["m", "xl", "s"],
    "clothes",
  ),

  new Productmodel(
    "3",
    "product1",
    "Description for product 10",
    19.99,
    "images",
    ["m", "xl", "s"],
    "Clothes",
  ),
];
