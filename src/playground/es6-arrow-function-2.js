// argument object - no longer with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  
  return a + b;
};
console.log(add(22,2,222));

// this keyword - no longer bound

const user = {
  name: 'Ves',
  cities: ['Sofia', 'Stara Zagora', 'Varna'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

// Challange area

const multiplier = {
  numbers: [11,22,33],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());