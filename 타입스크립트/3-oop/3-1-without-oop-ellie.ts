{
  const BEANS_GRAM_PER_SHOT = 7;
  let coffeeBeans:number = 0;

  type CoffeeCup = {
    shots: number;
    hasSugar: boolean;
  }
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error('Not enough coffee beans');
    }

    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasSugar: false
    }
  }

  coffeeBeans += 100;
  console.log(makeCoffee(2));
  console.log(makeCoffee(3));
}

