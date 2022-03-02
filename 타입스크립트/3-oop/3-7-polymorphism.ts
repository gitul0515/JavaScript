{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance level

    public constructor(beans: number) {
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
        hasMilk: false
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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, readonly serialNum: string) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee:CoffeeCup = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true
      }
    }

    steamMilk() {
      console.log('steamming some milk......');
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(beans: number, private hasSugar: boolean) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.hasSugar && console.log('adding sugar......');
      return {
        ...coffee,
        hasSugar: this.hasSugar,
      }
    };
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(100),
    new CaffeLatteMachine(100, 'abc'),
    new SweetCoffeeMachine(100, true)
  ];
  machines.forEach(machine => {
    console.log('--------------------------------');
    console.log(machine.makeCoffee(2));
  });
}
