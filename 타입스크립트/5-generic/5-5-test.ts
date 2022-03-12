{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay(): void {
      console.log('full time!!');
    }

    workFullTime() {

    }

  }

  class ParTimeEmployee implements Employee {
    pay(): void {
      console.log('part time!!');
    }

    workPartTime() {
      
    }
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const obj = {
    name: 'gihong',
    age: 29,
  };

  const obj2 = {
    animal: '🐶'
  }

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, 'name'));
  console.log(getValue(obj, 'age'));
  console.log(getValue(obj2, 'animal'));

}