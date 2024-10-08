class Inventory {
  constructor() {
    this.items = new Map();
  }
}

class StoreInventory extends Inventory {
  getStock(item) {
    return this.items.get(item);
  }
}
