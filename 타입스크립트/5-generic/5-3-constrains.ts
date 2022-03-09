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

  // 세부적인 타입을 인자로 받아서
  // 더 추상적인 타입으로 리턴하는 함수는 💩💩💩
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const gihong = new FullTimeEmployee();
  const bob = new ParTimeEmployee();
  gihong.workFullTime();
  bob.workPartTime();

  const gihongAfterPay = pay(gihong);
  const bobAfterPay = pay(bob);
  gihongAfterPay.workFullTime();
  bobAfterPay.workPartTime();
}