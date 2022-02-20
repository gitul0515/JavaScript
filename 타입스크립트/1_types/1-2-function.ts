{
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }
  // add(1, 2);

  // function fetchNum(id: string): Promise<number> {
  //   // code...
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // string | undefined
  }
  printName('steve', 'jobs');
  printName('ellie');
  printName('kwon', undefined);

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((prev, curr) => prev + curr, 0);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4));
}
