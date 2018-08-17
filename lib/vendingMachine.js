const Slot = require("./slot");

class VendingMachine {
  constructor(size) {
    this.slots = new Array(size);
    this.initialiseVendingMachineInventory();
  }

  initialiseVendingMachineInventory() {
    console.log(this.slots.length);

    for(let i=0; i < this.slots.length; i++) {
        this.slots[i] = new Slot()
    }
  }

  getSlots() {
    return this.slots;
  }

  fillUpSlot(number, product) {
    this.vendingMachineTest.slots[0];
  }
}

let vendingMachineTest = new VendingMachine(9);
console.log(vendingMachineTest.getSlots());

module.exports = VendingMachine;
