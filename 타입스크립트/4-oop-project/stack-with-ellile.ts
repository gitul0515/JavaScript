{
  // 연결리스트로 구현한 스택
  interface StackInterface {
    readonly size: number;
    push(value: string): void;
    pop(): string;
    peek(): string;
  }

  class StackNode {
    constructor(readonly data: string, readonly link: StackNode | null) {
    }
  }

  class Stack implements StackInterface{
    private _size: number = 0;
    get size() {return this._size};
    head: StackNode | null = null;

    constructor(private capacity: number) {
    }

    push(value: string): void {
      if (this._size === this.capacity) {
        throw new Error('stack is full!');
      }
      const newNode = new StackNode(value, this.head);
      this.head = newNode;
      this._size++;
    }

    pop(): string {
      if (this.head == null) { 
        throw new Error('stack is empty!');
      }
      const result = this.head.data;
      this.head = this.head.link;
      this._size--;
      return result;
    }

    peek():string {
      if (this.head == null) {
        throw new Error('stack is empty!');
      }
      return this.head.data;
    }

    addCapacity(capacity: number) {
      this.capacity += capacity;
    }
  }

  const stack = new Stack(3);
  stack.push('a');
  stack.push('b');
  stack.push('c');
  stack.addCapacity(2);
  stack.push('d');
  console.log(stack);
  
  // console.log(stack.peek()); // c
  // console.log(stack.size); // 3
  // console.log(stack.pop()); // c
  // console.log(stack.pop()); // b
  // console.log(stack.pop()); // a
  // console.log(stack.size); // 0
}