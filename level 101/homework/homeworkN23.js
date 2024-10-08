class Zoo{
  constructor(){
    this.animal = new Map();
  }

  listAnimals(){
    return Array.from(this.animals.keys())
  }
}