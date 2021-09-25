class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

class Derived extends Base {
  sayHi() {
    return `${super.sayHi()}. How are you doing?`;
  }
}

const derived = new Derived('Kwon');
console.log(derived.sayHi());
