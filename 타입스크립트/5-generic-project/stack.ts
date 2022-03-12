{
  // 연결리스트로 구현한 스택
  interface StackInterface<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
    peek(): T;
  }

  class StackNode<T> {
    constructor(readonly data: T, readonly link: StackNode<T> | null) {
    }
  }

  class Stack<T> implements StackInterface<T>{
    private _size: number = 0;
    get size() {return this._size};
    head: StackNode<T> | null = null;

    constructor(private capacity: number) {
    }

    push(value: T): void {
      if (this._size === this.capacity) {
        throw new Error('stack is full!');
      }
      const newNode = new StackNode<T>(value, this.head);
      this.head = newNode;
      this._size++;
    }

    pop(): T {
      if (this.head == null) { 
        throw new Error('stack is empty!');
      }
      const result = this.head.data;
      this.head = this.head.link;
      this._size--;
      return result;
    }

    peek(): T {
      if (this.head == null) {
        throw new Error('stack is empty!');
      }
      return this.head.data;
    }

    addCapacity(capacity: number) {
      this.capacity += capacity;
    }
  }

  const stringStack = new Stack<string>(3);
  stringStack.push('a');
  stringStack.push('b');
  stringStack.push('c');
  stringStack.addCapacity(2);
  stringStack.push('d');
  console.log(stringStack);
  console.log(stringStack.peek());
  console.log(stringStack.size);
  console.log(stringStack.pop());
  console.log(stringStack.pop());
  console.log(stringStack.pop());
  console.log(stringStack.size);

  const numberStack = new Stack<number>(3);
  numberStack.push(1);
  numberStack.push(2);
  numberStack.push(3);
  numberStack.addCapacity(2);
  numberStack.push(4);
  console.log(numberStack);
  console.log(numberStack.peek());
  console.log(numberStack.size);
  console.log(numberStack.pop());
  console.log(numberStack.pop());
  console.log(numberStack.pop());
  console.log(numberStack.size);

  const booleanStack = new Stack<boolean>(3);
  booleanStack.push(true);
  booleanStack.push(false);
  booleanStack.push(false);
  booleanStack.addCapacity(2);
  booleanStack.push(true);
  console.log(booleanStack);
  console.log(booleanStack.peek());
  console.log(booleanStack.size);
  console.log(booleanStack.pop());
  console.log(booleanStack.pop());
  console.log(booleanStack.pop());
  console.log(booleanStack.size);

}