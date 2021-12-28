// 보완2: 경로압축법(PathCompression)
// 탐색하는(find) 과정에서 시간을 줄이는 방법
class DisjointSet {
  constructor() {
    this.set = [];
  }

  makeSet(n) {
    for (let i = 0; i < n; i++) {
      this.set[i] = i;
    }
  }

  // u가 속한 집합을 찾는다
  find(u) {
    if (u === this.set[u]) return u;
    this.set[u] = this.find(this.set[u]); // 경로압축법 추가한 코드
    return this.set[u];
  }

  // u와 v를 하나의 집합으로 만든다
  union(_u, _v) {
    const u = this.find(_u);
    const v = this.find(_v);
    if (u !== v) {
      this.set[u] = v; // v가 부모가 된다
    }
  }

  // 경로 압축법을 실행한다 O(n*logn)
  pathCompression() {
    for (let i = 0; i < this.set.length; i++) {
      this.find(i);
    }
  }
}

const test = new DisjointSet();
test.makeSet(5);
test.union(1, 0);
test.union(2, 1);
test.union(4, 3);
test.union(0, 3);
console.log(test.set); // [ 3, 0, 0, 3, 3 ]
test.pathCompression(); // 경로 압축법을 실행한다
console.log(test.set); // [ 3, 3, 3, 3, 3 ]
