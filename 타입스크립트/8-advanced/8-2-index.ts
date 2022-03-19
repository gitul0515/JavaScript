{
  // Index Type
  const obj = {
    name: 'gihong',
  }
  obj.name;
  obj['name'];

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  }

  type Name = Animal['name']; // string
  const text: Name = 'hello';

  type Gender = Animal['gender']; // 'male' | 'female';
  const gender:Gender = 'male';

  type Keys = keyof Animal; // 'name' | 'age' | 'gender';
  const keys:Keys = 'name';

  type Person = {
    name: string;
    gender: Animal['gender']; // 'male' | 'female';
  }

  const person: Person = {
    name: 'gihong',
    gender: 'male'
  }
}