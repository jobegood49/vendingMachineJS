class Bill {
  constructor(value, name) {
    this.value = value;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }
}

module.exports = Bill;
