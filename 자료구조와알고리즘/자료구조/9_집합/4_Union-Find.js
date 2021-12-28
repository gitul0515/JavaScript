// 유니온-파인드 (서로소 집합(disjoint set)) 자료구조
// 각 집합을 하나의 트리로 구현한다
class DisjointSet {
  constructor() {
    this.set = [];
  }

  // n개의 집합을 생성한다
  makeSet(n) {
    for (let i = 0; i < n; i++) {
      this.set[i] = i; // 자기 자신이 대표 원소
    }
  }

  // u가 속한 집합을 찾는다 (대표 원소인 루트를 반환)
  find(u) {
    if (u === this.set[u]) return u;
    return this.find(this.set[u]);
  }

  // u와 v를 하나의 집합으로 만든다
  union(_u, _v) {
    const u = this.find(_u);
    const v = this.find(_v);
    if (u !== v) {
      this.set[u] = v; // v가 부모가 된다
    }
  }
}

const test = new DisjointSet();
test.makeSet(6);
test.union(1, 2);
test.union(3, 2);
test.union(4, 3);
console.log(test.set); // [ 0, 2, 2, 2, 2, 5 ]
test.union(5, 0);
test.union(2, 0);
console.log(test.set); // [ 0, 2, 0, 2, 2, 0 ]
