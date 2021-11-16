// 보완2: 경로압축법(PathCompression)
// 탐색하는(Find) 과정에서 시간을 줄이는 방법
class DisjointSet {
  constructor() {
    this.set = [];
  }

  makeSet = n => {
    for (let i = 0; i < n; i++) {
      this.set[i] = i;
    }
  }

  // u가 속한 집합을 찾는다
  find = u => {
    if (u === this.set[u]) return u;
    this.set[u] = this.find(this.set[u]); // 경로압축법 추가한 코드
    return this.set[u];
  }

  // u와 v를 하나의 집합으로 만든다
  union = (_u, _v) => {
    const u = this.find(_u);
    const v = this.find(_v);
    if (u !== v) {
      this.set[u] = v; // v가 부모가 된다
    }
  }
}

const test = new DisjointSet();
test.makeSet(5);
test.union(1, 0);
test.union(2, 1);
test.union(4, 3);
test.union(0, 3);
console.log(test.set);
test.find(1); test.find(2); // 루트 노드를 갱신한다
console.log(test.set);

// 루트 노드를 갱신하는 함수를 따로 작성하는 것도 좋을 듯
