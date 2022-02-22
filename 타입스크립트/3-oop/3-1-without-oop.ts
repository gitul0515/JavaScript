{
  let coffeeBeans:number = 10;

  type Shots = 'one' | 'two';
  function makeCoffee(numberOfShots: Shots): string | null {
    let result: string;
    switch (numberOfShots) {
      case 'one':
        if (coffeeBeans < 5) {
          console.log('Not enough coffee beans');
          return null;
        }
        coffeeBeans -= 5;
        result = 'oneShotCoffee';
        break;
      case 'two': 
        if (coffeeBeans < 10) {
          console.log('Not enough coffee beans');
          return null;
        }
        coffeeBeans -= 10;
        result = 'twoShotCoffee';
        break;
      default:
        throw new Error('Error: You can make 1 or 2 shots')
    }
    console.log(`beans left(g): ${coffeeBeans}`);
    return result;
  }

  // console.log('result:', makeCoffee('one'));
  console.log('result:', makeCoffee('two'));
}

