{
  // mapped type 응용: Proxy
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  }

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  }

  type Person = {
    name: string;
    age: number;
  }

  // const person:Person = {
  //   name: 'gihong',
  //   age: 29
  // }

  const person:Proxify<Person> = {
    name: {
      get(): string {
        return 'gihong';
      },
      set(value: string) {
        this.get = () => value;
      }
    },
    age: {
      get(): number {
        return 29;
      },
      set(value: number) {
        this.get = () => value;
      }
    }
  }
  console.log(person.name.get()); // 'gihong'
  person.name.set('billy');
  console.log(person.name.get()); // 'billy' 

  console.log(person.age.get()); // 29
  person.age.set(19); 
  console.log(person.age.get()); // 19 
}