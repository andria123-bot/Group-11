class Store{
  constructor(){
    this.products = new Map();
  }

  getPrice(product){
    return this.products.get(product)
  }
}