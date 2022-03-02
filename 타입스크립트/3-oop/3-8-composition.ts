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
        shots
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

  class CheapMilkSteamer {
    private steamMilk() {
      console.log('steamming some milk......');
    }

    addMilk(coffee: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true
      }
    }
  }

  class AutomaticSugarMixer {
    private getSugarFromJar() {
      console.log('getting sugar from jar......');
    }

    addSugar(coffee: CoffeeCup): CoffeeCup {
      this.getSugarFromJar();
      return {
        ...coffee,
        hasSugar: true
      }
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number, 
      public readonly serialNum: string,
      private milkSteamer: CheapMilkSteamer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkSteamer.addMilk(coffee);
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(
      beans: number, 
      private sugarMixer: AutomaticSugarMixer
      ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugarMixer.addSugar(coffee);
    };
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      private milkSteamer: CheapMilkSteamer,
      private sugarMixer: AutomaticSugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const addedMilk = this.milkSteamer.addMilk(coffee);
      return this.sugarMixer.addSugar(addedMilk);
    };
  }

  const caffeLatteMachine:CoffeeMaker = new CaffeLatteMachine(
    100,
    'abc',
    new CheapMilkSteamer()
  );
  const caffeLatte = caffeLatteMachine.makeCoffee(2);
  console.log(caffeLatte);
  
  const sweetCoffeeMachine:CoffeeMaker = new SweetCoffeeMachine(
    100,
    new AutomaticSugarMixer()
  );
  const sweetCoffee = sweetCoffeeMachine.makeCoffee(2);
  console.log(sweetCoffee);

  const sweetCaffeLatteMachine:CoffeeMaker = new SweetCaffeLatteMachine(
    100,
    new CheapMilkSteamer(),
    new AutomaticSugarMixer()
  );
  const sweetCaffeLatte = sweetCaffeLatteMachine.makeCoffee(2);
  console.log(sweetCaffeLatte);
}
