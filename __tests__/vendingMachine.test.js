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
});
