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


// Product.prototype.setPrice = price => {
//   console.log("thisPrice", this.price);
//   this.price = price;
// };

// Product.prototype.getPrice = price => {
//   return this.price;
// };

// let productTest = new Product(2, "twix");

// console.log(productTest);

// productTest.setPrice(3);

// console.log(productTest);
