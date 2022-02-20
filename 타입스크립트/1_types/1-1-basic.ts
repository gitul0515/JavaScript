{
  // number
  const num: number = 6;

  // string
  const str: string = 'hello';

  // boolean
  const bool:boolean = true;

  // undefined
  let age: number | undefined;
  age = 10;
  age = undefined;

  // null
  let name: string | null;
  name = 'seho';
  name = null;

  // unknown (사용하지 않는 것이 좋다)
  let notSure: unknown = 0;
  notSure = 'hello';
  notSure = true;

  // any (사용하지 않는 것이 좋다)
  let anything: any = 10;
  anything = 'hello';
  anything = true;

  // void
  // 반환값이 없음. 생략할 수 있다
  function print(): void {
    console.log('hello');
  }

  // never
  // 반환값이 절대로 없음. 에러 처리 or 무한 루프
  function throwError(message: string): never {
    throw new Error(message);
  }

  // object
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'seho' });
  acceptSomeObject({ age: 19 });
}
