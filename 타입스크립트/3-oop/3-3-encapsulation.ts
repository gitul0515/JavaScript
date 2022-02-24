{
  type CoffeeCup = {
    shots: number;
    hasSugar: boolean;
  }

  class CoffeeMachine {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance level

    constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }
  
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasSugar: false
      }
    }

    set addBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    get checkBeans(): number {
      return this.coffeeBeans;
    }
  }

  const coffeeMachine = new CoffeeMachine(100);
  coffeeMachine.addBeans = 50;
  console.log(coffeeMachine.checkBeans);
  coffeeMachine.addBeans = -10;
}

