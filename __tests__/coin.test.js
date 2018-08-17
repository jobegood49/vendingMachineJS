const Coin = require("../lib/coin");

describe("coin", () => {
  it("should have a name and price", () => {
    const result = new Coin(0.1, "dime");
    expect(result.name).toEqual("dime");
    expect(result.value).toEqual(0.1);
  });
});
