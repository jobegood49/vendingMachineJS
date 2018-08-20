const vendingMachine = require("../lib/vendingMachine");

describe("vendingMachine", () => {
  it("should have 9 slots after initalization", () => {
    const result = new vendingMachine(9);
    expect(result.slots.length).toEqual(9);
  });
  it("each slot should have 10 spaces after initialization", () => {
    const result = new vendingMachine(9);
    expect(result.slots[0].spaces.length).toEqual(10);
  });
  it("should should five types of coins", () => {
    const result = new vendingMachine(9);
    expect(result.coinInventory.length).toEqual(5);
  });
  it("if change is 2.5 dollars it should return 1 toonie and two quarters", () => {
    const result = new vendingMachine(9);
    expect(result.returnChange(2.5)).toEqual({ Toonie: 1, Loonie: 0, Quarter: 2 });
  });
});
