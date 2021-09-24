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

const bird = new Bird(1, 5);
console.log(bird);
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

console.log(bird.eat()); // 'eat'
console.log(bird.move()); // 'move'
console.log(bird.fly()); // 'fly'
