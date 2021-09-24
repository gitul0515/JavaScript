class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat = () => 'eat';

  move = () => 'move';
}

class Bird extends Animal {
  fly = () => 'fly';
}

const bird = new Bird(11, 57);
console.log(bird);
console.log(bird instanceof Animal);
console.log(bird instanceof Bird);

console.log(bird.eat());
console.log(bird.move());
console.log(bird.fly());
