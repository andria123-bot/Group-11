class ShoppingCart {
  constructor() {
    this.items = new Map();
  }

  addItem(product, quantity) {
    this.items.set(product, quantity);
  }

  getTotalItems() {
    let total = 0;
    this.items.forEach(quantity => total += quantity);
    return total;
  }
}
