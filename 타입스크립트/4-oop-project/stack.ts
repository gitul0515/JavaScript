{
  class Stack {
    private data = {};
    private top:number = -1;

    public push(str: string) {
      this.data[++this.top] = str;
    }

    public pop(): string {
      if (this.size === 0) {
        return 'stack is empty';
      }
      const result = this.data[this.top];
      delete this.data[this.top--];
      return result;
    }

    public peek(): string {
      if (this.size === 0) {
        return 'stack is empty';
      }
      return this.data[this.top];
    }

    get size(): number {
      return this.top + 1;
    }

    get getData(): object {
      return this.data;
    }
  }

  const stack = new Stack();
  console.log(stack.size);
  
}