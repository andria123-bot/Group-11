class RestaurantMenu {
  constructor(menu) {
    this.menu = new Map(menu);
  }

  getItemPrice(item) {
    return this.menu.get(item);
  }
}
