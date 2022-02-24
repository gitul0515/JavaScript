{
  type CoffeeCup = {
    shots: number;
    hasSugar: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance level

    constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    private grindBeans(shots: number) {
      console.log('grinding......');
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat() {
      console.log('heating......');
    }

    private extract(shots: number): CoffeeCup {
      console.log('extracting......');
      return {
        shots,
        hasSugar: false
      }
    }

    set fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    get checkCoffeeBeans(): number {
      return this.coffeeBeans;
    }
  }

  const coffeeMachine = new CoffeeMachine(100);
  console.log(coffeeMachine.makeCoffee(3));
}
