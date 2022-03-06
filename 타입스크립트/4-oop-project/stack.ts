{
  // 객체로 구현한 스택
  type StackValue = string | number | boolean;
  type StackData = {
    [key: string]: StackValue;
  }

  interface StackInterface {
    readonly size: number;
    push(value: StackValue): void;
    pop(): StackValue;
    peek(): StackValue;
  }

  abstract class Stack implements StackInterface {
    protected data: StackData = {};
    protected top:number = -1;

    public abstract push(value: StackValue): void;
    public abstract pop(): StackValue;
    public abstract peek(): StackValue;

    get size(): number {
      return this.top + 1;
    }

    get getData(): StackData {
      return this.data;
    }
  }

  // string을 저장하는 스택
  class StringStack extends Stack {
    public push(value: string) {
      this.data[++this.top] = value;
    }

    public pop(): StackValue {
      if (this.size === 0) {
        return 'stack is empty';
      }
      const result = this.data[this.top];
      delete this.data[this.top--];
      return result;
    }

    public peek(): StackValue {
      if (this.size === 0) {
        return 'stack is empty';
      }
      return this.data[this.top];
    }
  }

  // number을 저장하는 스택
  class NumberStack extends Stack {
    public push(value: number) {
      this.data[++this.top] = value;
    }

    public pop(): StackValue {
      if (this.size === 0) {
        return 'stack is empty';
      }
      const result = this.data[this.top];
      delete this.data[this.top--];
      return result;
    }

    public peek(): StackValue {
      if (this.size === 0) {
        return 'stack is empty';
      }
      return this.data[this.top];
    }
  }

  // boolean을 저장하는 스택
  class BooleanStack extends Stack {
    public push(value: boolean) {
      this.data[++this.top] = value;
    }

    public pop(): StackValue {
      if (this.size === 0) {
        return 'stack is empty';
      }
      const result = this.data[this.top];
      delete this.data[this.top--];
      return result;
    }

    public peek(): StackValue {
      if (this.size === 0) {
        return 'stack is empty';
      }
      return this.data[this.top];
    }
  }

  const stringStack = new StringStack();
  stringStack.push('A');
  stringStack.push('B');
  stringStack.push('C');
  console.log(stringStack.pop()); // C
  console.log(stringStack.peek()); // B
  console.log(stringStack.pop()); // B
  console.log(stringStack.pop()); // A
  console.log(stringStack.pop());
  console.log(stringStack.size);
  console.log(stringStack.getData);
  console.log();
  
  const numberStack = new NumberStack();
  numberStack.push(1);
  numberStack.push(2);
  numberStack.push(3);
  console.log(numberStack.pop()); // 3
  console.log(numberStack.peek()); // 2
  console.log(numberStack.pop()); // 2
  console.log(numberStack.pop()); // 1
  console.log(numberStack.pop());
  console.log(numberStack.size);
  console.log(numberStack.getData);
  console.log();

  const booleanStack = new BooleanStack();
  booleanStack.push(true);
  booleanStack.push(false);
  booleanStack.push(true);
  console.log(booleanStack.pop()); // true
  console.log(booleanStack.peek()); // false
  console.log(booleanStack.pop()); // false
  console.log(booleanStack.pop()); // true
  console.log(booleanStack.pop());
  console.log(booleanStack.size);
  console.log(booleanStack.getData);
}