class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  move() {
    return 'move';
  }

  eat() {
    return 'eat';
  }
}

class Bird extends Animal {
  fly() {
    return 'fly';
  }
}

const bird = new Bird();
console.log(bird.eat());
console.log(bird.move());
console.log(bird.fly());
