{
  type CoffeeCup = {
    shots: number;
    hasSugar: boolean;
  }

  class CoffeeMachine {
    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    #coffeeBeans: number = 0; // instance level

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

    static makeCoffeeMachine(beans: number) {
      return new CoffeeMachine(beans);
    }

    addCoffeeBeans(beans: number) {
      this.#coffeeBeans += beans;
    }

    get checkCoffeeBeans() {
      return this.#coffeeBeans;
    }
  }

  const coffeeMachine = CoffeeMachine.makeCoffeeMachine(100);
  console.log(coffeeMachine);
}

