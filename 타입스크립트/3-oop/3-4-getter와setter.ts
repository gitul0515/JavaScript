{
  class User {
    private userAge = 4;
    constructor(private firstName: string, private lastName: string) {
    }

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    get age(): number {
      return this.userAge;
    }
    set age(num: number) {
      if (num < 0) return;
      this.userAge = num;
    }
  }

  const user = new User('Kwon', 'gihong');
  console.log(user.fullName);
  user.age = 100; 
  console.log(user.age);
}