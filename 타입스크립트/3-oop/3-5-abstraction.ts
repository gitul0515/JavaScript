{
  type CoffeeCup = {
    shots: number;
    hasSugar: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
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

    fillBeans(beans: number) {
      this.coffeeBeans += beans;
      console.log('leftover beans:', this.coffeeBeans);
    }

    clean() {
      console.log('cleaning......');
    }
  }

  class Amateur {
    constructor(private machine: CoffeeMaker) { 
    }
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }

  }

  class Pro {
    constructor(private machine: CommercialCoffeeMaker) { 
    }
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillBeans(45);
      this.machine.clean();
    }
  }

  const coffeeMachine = new CoffeeMachine(100);
  const amateur = new Amateur(coffeeMachine);
  const pro = new Pro(coffeeMachine);

  pro.makeCoffee();

}
