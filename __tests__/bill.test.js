const Bill = require("../lib/bill");

describe("coin", () => {
  it("should have a name and price", () => {
    const result = new Bill(5, "5dollarBill");
    expect(result.name).toEqual("5dollarBill");
    expect(result.value).toEqual(5);
  });
});
