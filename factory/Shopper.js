class Shopper {
  constructor(name, money = 0) {
    this.name = name;
    this.money = money;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Shopper;