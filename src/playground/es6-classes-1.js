
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getDescription() {
    return `${this.name} is ${this.age} years(s) old.`;
  }

  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let desctiption = super.getDescription();

    if (this.hasMajor()){
      desctiption += ` Their major is ${this.major}`;
    }

    return desctiption;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasHomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Traveler('Veselin Velichkov', 28, 'Sofia, Bulgaria');

console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, undefined);
console.log(other.getGreeting());
