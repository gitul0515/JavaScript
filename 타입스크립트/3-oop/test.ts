{
  type CoffeeCup = {
    shots: number;
    hasSugar: boolean;
  }

  class CoffeeMachine {
    static readonly BEANS_GRAM_PER_SHOT: number = 7;
    #coffeeBeans: number = 0;

    constructor(beans: number) {
      this.#coffeeBeans = beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.#coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }
  
      this.#coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasSugar: false
      }
    }

    static makeCoffeeMachine(beans: number): CoffeeMachine {
      return new CoffeeMachine(beans);
    }
  }
  const coffeeMachine = CoffeeMachine.makeCoffeeMachine(100);
  console.log(coffeeMachine);

}