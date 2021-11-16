// 보완1: WeightedUnion
// 트리의 높이를 크게 만들지 않는 방식으로 최적화
class DisjointSet {
  constructor() {
    this.set = [];
    this.rank = []; // 각 노드의 Rank를 저장할 배열
  }

  makeSet = n => {
    for (let i = 0; i < n; i++) {
      this.set[i] = i;
      this.rank[i] = 0; // 단말 노드의 Rank는 0으로 저장
    }
  }

  find = u => {
    if (u === this.set[u]) return u;
    return this.find(this.set[u]);
  }

  union = (_u, _v) => {
    const u = this.find(_u);
    const v = this.find(_v);
    if (u === v) return;
    if (this.rank[u] > this.rank[v]) { // Rank가 높은 트리 밑에 Rank가 낮은 트리를 붙인다
      this.set[v] = u;
    } else {
      this.set[u] = v;
      // 두 집합의 Rank가 같은 경우에만 전체 Rank의 크기가 커진다
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

console.log(test.set);
console.log(test.rank);

// 보충: Rank는 일반적인 '높이'와는 차이가 있다.
// 각 노드가 자신을 루트로 하는 서브 트리의 높이를 뜻한다.
