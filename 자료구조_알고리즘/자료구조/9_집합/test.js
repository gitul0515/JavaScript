// 보완1: WeightedUnion
// 트리의 높이를 크게 만들지 않는 방식으로 최적화
class DisjointSet {
  constructor() {
    this.set = [];
    this.rank = [];
  }

  makeSet(n) {
    for (let i = 0; i < n; i++) {
      this.set[i] = i;
      this.rank[i] = 0;
    }
  }

  find(u) {
    if (u === this.set[u]) return u;
    this.set[u] = this.find(this.set[u]);
    return this.set[u];
  }

  union(_u, _v) {
    const u = this.find(_u);
    const v = this.find(_v);
    if (u === v) return;
    if (this.rank[u] > this.rank[v]) {
      this.set[v] = u;
    } else {
      this.set[u] = v;
      if (this.rank[u] === this.rank[v]) {
        this.rank[v]++;
      }
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
console.log(test.rank); // [ 1, 0, 0, 2, 0 ]
