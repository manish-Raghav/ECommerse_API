class CartitemModal {
  constructor(userid, productid, qauntity) {
    this.userid = userid;
    this.productid = productid;
    this.qauntity = qauntity;
  }
}
var cartItems = [new CartitemModal(1, 2, 2)];

export default CartitemModal;
