{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance level

    public constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee: CoffeeCup = { shots, hasMilk: false, hasSugar: false };
      return this.extract(coffee);
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

    protected abstract extract(coffee: CoffeeCup): CoffeeCup;

    fillBeans(beans: number) {
      this.coffeeBeans += beans;
      console.log('leftover beans:', this.coffeeBeans);
    }

    clean() {
      console.log('cleaning......');
    }
  }


  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number) {
      super(beans);
    }

    protected extract(coffee: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    };

    private steamMilk() {
      console.log('steamming some milk......');
    };
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(beans: number) {
      super(beans);
    }

    protected extract(coffee: CoffeeCup): CoffeeCup {
      this.addSugar();
      return { ...coffee, hasSugar: true };
    };

    private addSugar() {
      console.log('adding sugar......');
    }
  }

  const caffeLatteMachine = new CaffeLatteMachine(100);
  const caffeLatte = caffeLatteMachine.makeCoffee(2);
  console.log(caffeLatte);
  
  console.log('------------------------------------');
  
  const sweetCoffeeMachine = new SweetCoffeeMachine(100);
  const sweetCoffee = sweetCoffeeMachine.makeCoffee(2);
  console.log(sweetCoffee);
}
