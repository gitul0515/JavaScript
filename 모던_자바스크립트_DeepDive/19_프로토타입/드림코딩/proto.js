function CoffeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // this.makeCoffee = () => {
  //   console.log('making coffee...');
  // };
}

// Prototype member level
CoffeMachine.prototype.makeCoffee = () => {
  console.log('making coffee...');
};

const machine1 = new CoffeMachine(10);
const machine2 = new CoffeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
// Object.create()를 사용한 고전적인 상속방법
LatteMachine.prototype = Object.create(CoffeMachine.prototype);

const latteMachine = new LatteMachine(true);
console.log(latteMachine);
latteMachine.makeCoffee();