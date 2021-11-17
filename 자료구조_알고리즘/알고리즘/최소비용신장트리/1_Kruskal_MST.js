// Kruskal의 MST 알고리즘
// 무방향 그래프
const graph = [
  // [vertex1, vertex2, weight]
  [1, 2, 19],
  [1, 3, 13],
  [1, 4, 30],
  [1, 5, 14],
  [1, 7, 54],
  [2, 3, 12],
  [2, 6, 39],
  [3, 6, 17],
  [3, 5, 57],
  [4, 7, 28],
  [5, 7, 76],
  [6, 7, 49],
];
const mst = [];
const vertexNum = 7;

// 가중치를 기준으로 오름차순 정렬
graph.sort((a, b) => a[2] - b[2]);
// 오답노트: 비교함수에서 a, b는 인덱스가 아니라 요소값이다.
// graph.sort((a, b) => graph[a][2] - graph[b][2]); // 잘못된 코드
console.log(graph);

// 유니온-파인드 자료구조 (Weighted Union)
class DisjointSet {
  constructor() {
    this.set = [];
    this.rank = []; // 각 노드의 Rank를 저장할 배열
    // Rank: 각 노드가 자신을 루트로 하는 서브 트리의 높이
  }

  makeSet(n) {
    for (let i = 0; i < n; i++) {
      this.set[i] = i;
      this.rank[i] = 0; // 단말 노드의 Rank는 0으로 저장
    }
  }

  find(u) {
    if (u === this.set[u]) return u;
    return this.find(this.set[u]);
  }

  union(_u, _v) {
    const u = this.find(_u);
    const v = this.find(_v);
    if (u === v) return;
    if (this.rank[u] > this.rank[v]) { // Rank가 높은 트리 밑에 Rank가 낮은 트리를 붙인다
      this.set[v] = u;
    } else {
      this.set[u] = v;
      // 두 집합의 Rank가 같은 경우 전체 Rank의 크기가 커진다
      if (this.rank[u] === this.rank[v]) {
        this.rank[v]++;
      }
    }
  }
}

const set = new DisjointSet();
set.makeSet(vertexNum);

function Kruskal() {
  for (let i = 0; i < graph.length; i++) {
    const [u, v, w] = graph[i];
    if (set.find(u) !== set.find(v)) {
      set.union(u, v);
      mst.push([u, v, w]);
      if (set.size === vertexNum) break;
    }
  }
}
