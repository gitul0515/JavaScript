{
  // 연결리스트로 구현한 스택
  interface StackInterface {
    size: number;
    push(value: string): void;
    pop(): string;
    peek(): string;
  }

  class ListNode {
    data: string;
    link: ListNode | null;

    constructor(value: string) {
      this.data = value; 
      this.link = null;
    }
  }

  class Stack implements StackInterface{
    size: number = 0;
    head: ListNode | null = null;

    public push(value: string): void {
      if (this.head === null) {
        this.head = new ListNode(value);
      } else {
        const newNode = new ListNode(value);
        newNode.link = this.head;
        this.head = newNode;
      }
      this.size++;
    }

    public peek():string {
      if (this.head === null) {
        return 'stack is empty';
      }
      return this.head.data;
    }

    public pop(): string {
      if (this.head === null) {
        return 'stack is empty';
      }
      const result = this.head.data;
      this.head = this.head.link;
      this.size--;
      return result;
    }
  }

  const stack = new Stack();
  stack.push('a');
  stack.push('b');
  stack.push('c');
  console.log(stack.peek()); // c
  console.log(stack.size); // 3
  console.log(stack.pop()); // c
  console.log(stack.pop()); // b
  console.log(stack.pop()); // a
  console.log(stack.size); // 0
}