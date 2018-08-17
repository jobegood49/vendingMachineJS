const Slot = require("../lib/slot");

describe("slot", () => {
  it("should have 10 spaces", () => {
    const result = new Slot()
    expect(result.spaces.length).toEqual(10);
  });
});