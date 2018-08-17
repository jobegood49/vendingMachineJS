const Product = require("../lib/product");

describe("product", () => {
  it("should have a price", () => {
    const result = new Product(3, "mars")
    expect(result.name).toEqual('mars');
  });
});
