const Slot = require("./slot");
const Product = require("./product");
const Coin = require("./coin");
class VendingMachine {
  constructor(size) {
    this.slots = new Array(size);
    this.initialiseVendingMachineInventory();
    this.coinInventory = [
      {
        coin: new Coin(2, "Toonie"),
        count: 5
      },
      {
        coin: new Coin(1, "Loonie"),
        count: 5
      },
      {
        coin: new Coin(0.25, "Quarter"),
        count: 5
      },
      {
        coin: new Coin(0.1, "Dime"),
        count: 5
      },
      {
        coin: new Coin(0.5, "Nickel"),
        count: 5
      }
    ];
  }

  initialiseVendingMachineInventory() {
    for (let i = 0; i < this.slots.length; i++) {
      this.slots[i] = new Slot();
    }
    this.fillUpVendingMachine();
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
    for (let i = 0; i < 9; i++) {
      this.fillUpSlot(i);
    }
  }
  returnChange(change) {
    let remainder = change;
    return this.coinInventory.reduce(function(returnedChange, el) {
      if (remainder / el.coin.value > 0 && remainder > 0) {
        returnedChange[el.coin.name] = Math.floor(remainder / el.coin.value);
        remainder =
          remainder - Math.floor(remainder / el.coin.value) * el.coin.value;
      }
      return returnedChange;
    }, {});
  }
}

let vendingMachineTest = new VendingMachine(9);
// console.log(vendingMachineTest.coinInventory[0].coin);
console.log(vendingMachineTest.returnChange(2.5));

module.exports = VendingMachine;

