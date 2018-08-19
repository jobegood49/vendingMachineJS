const Slot = require("./slot");
const Product = require("./product");
class VendingMachine {
  constructor(size) {
    this.slots = new Array(size);
    this.initialiseVendingMachineInventory();
  }

  initialiseVendingMachineInventory() {
    for (let i = 0; i < this.slots.length; i++) {
      this.slots[i] = new Slot();
    }
    this.fillUpVendingMachine()
  }

  getSlots() {
    return this.slots;
  }

  fillUpSlot(number) {
    let productsArray = ["coke", "sprite", "pepsi"];
    for (let i = 0; i < 10; i++) {
      let product =
        productsArray[Math.floor(Math.random() * productsArray.length)];
      this.slots[number].spaces[i] = new Product(2, product);
    }
    return this.slots[number];
  }

  fillUpVendingMachine() {
    for(let i = 0; i < 9; i++) {
      this.fillUpSlot(i)
    }
  }
}

// let vendingMachineTest = new VendingMachine(9);
// console.log(vendingMachineTest.getSlots());

module.exports = VendingMachine;

// console.log(vendingMachineTest.fillUpSlot(2));
// vendingMachineTest.fillUpVendingMachine()

// console.log(vendingMachineTest.getSlots());
// console.log(vendingMachineTest.slots[1]);


