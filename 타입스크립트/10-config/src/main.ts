class Car {
  engine = 0;
  move() {
    const engine = this.engine + 1;
    console.log(engine);
    console.log('I\'m bug');
  }
}

const car = new Car();
car.move();