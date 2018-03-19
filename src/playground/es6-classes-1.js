
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getDescription() {
    return `${this.name} is ${this.age} years(s) old.`
  }
}

const me = new Person('Ves Velichkov', 28);

console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());