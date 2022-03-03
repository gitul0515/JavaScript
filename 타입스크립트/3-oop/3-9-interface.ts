{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkSteamer {
    addMilk(coffee: CoffeeCup): CoffeeCup;
  }

  interface SugarMixer {
    addSugar(coffee: CoffeeCup): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;

    constructor(
      private coffeeBeans: number = 0,
      private milkSteamer: MilkSteamer,
      private sugarMixer: SugarMixer
      ) {
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      let coffee = this.extract(shots);
      coffee = this.milkSteamer.addMilk(coffee);
      coffee = this.sugarMixer.addSugar(coffee);
      return coffee;
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

  // Milk
  class CheapMilkSteamer implements MilkSteamer{
    private steamMilk() {
      console.log('steamming some milk......Cheap!');
    }

    addMilk(coffee: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true
      }
    }
  }

  class FancyMilkSteamer implements MilkSteamer{
    private steamMilk() {
      console.log('steamming some milk......Fancy!');
    }

    addMilk(coffee: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true
      }
    }
  }

  class ColdMilkSteamer implements MilkSteamer{
    private steamMilk() {
      console.log('steamming some milk......Cold!');
    }

    addMilk(coffee: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true
      }
    }
  }

  class NoMilk implements MilkSteamer{
    addMilk(coffee: CoffeeCup): CoffeeCup {
      return { ...coffee, hasMilk: false };
    }
  }

  // Sugar
  class CandySugarMixer implements SugarMixer{
    private getSugarFromCandy() {
      console.log('getting sugar from candy......');
    }

    addSugar(coffee: CoffeeCup): CoffeeCup {
      this.getSugarFromCandy();
      return {
        ...coffee,
        hasSugar: true
      }
    }
  }

  class FancySugarMixer implements SugarMixer{
    private getSugarFromJar() {
      console.log('getting sugar from jar......!!!');
    }

    addSugar(coffee: CoffeeCup): CoffeeCup {
      this.getSugarFromJar();
      return {
        ...coffee,
        hasSugar: true
      }
    }
  }

  class NoSugar implements SugarMixer{
    addSugar(coffee: CoffeeCup): CoffeeCup {
      return { ...coffee, hasSugar: false };
    }
  }

  // milk
  const cheapMilk = new CheapMilkSteamer();
  const fancyMilk = new FancyMilkSteamer();
  const coldMilk = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // sugar
  const candySugar = new CandySugarMixer();
  const fancySugar = new FancySugarMixer();
  const noSugar = new NoSugar();

  const coffeeMachine = new CoffeeMachine(100, fancyMilk, candySugar);
  console.log(coffeeMachine.makeCoffee(2));
}
