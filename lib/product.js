class Product {
  constructor(price, name) {
    this.price = price;
    this.name = name;
  }

  //No Es6 arrow function

  setPrice(price) {
    this.price = price;
  }

  getPrice(price) {
    return this.price;
  }
}

module.exports = Product;
