// 무방향 그래프 구현 (인접 리스트 사용)
// 생성자 함수
function UndirectedGraph() {
  this.edges = {}; // 간선을 저장하는 객체
}

// 숫자인지 판별하는 함수
UndirectedGraph.prototype.isNumber = function (value) {
  return typeof value === 'number' && Number.isFinite(value);
};

// 정점 삽입 함수
UndirectedGraph.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {}; // this.edges 객체 안에 객체 형태로 저장한다.
};

// 가중치가 있는 간선 삽입 함수
UndirectedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
  // 가중치가 숫자인지 판별한다
  if (!this.isNumber(weight)) {
    throw new TypeError('weight must be number');
  }

  // 유효한 정점인지 확인 후, 간선을 삽입
  if (this.edges[vertex1] && this.edges[vertex2]) {
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
  } else {
    throw new TypeError('invalid vertex');
  }
};

const graph = new UndirectedGraph();
graph.addVertex(1); graph.addVertex(2);
graph.addVertex(3); graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 5, 88);
graph.addEdge(2, 3, 8);
graph.addEdge(3, 4, 10);
graph.addEdge(4, 2, 100);
graph.addEdge(5, 2, 120);

// 무방향 그래프의 간선을 중복을 포함하여 저장한다
UndirectedGraph.prototype.AllEdge = function () {
  const result = [];

  // 그래프에서 간선(v1, v2, weight)을 추출한다
  for (const v1 in graph.edges) {
    if (Object.hasOwnProperty.call(graph.edges, v1)) {
      for (const v2 in graph.edges[v1]) {
        if (Object.hasOwnProperty.call(graph.edges[v1], v2)) {
          const weight = graph.edges[v1][v2];
          result.push([v1, v2, weight]); // 삽입
        }
      }
    }
  }
  return result;
};

// 무방향 그래프의 간선을 중복 없이 저장한다
UndirectedGraph.prototype.DistinctEdge = function () {
  const result = [];

  // 중복된 간선을 검사하는 함수
  function redundancyCheck(array) {
    const [v1, v2] = [array[0], array[1]];

    // 예: [v1, v2]가 [2, 3]일 때, [2, 3]과 [3, 2]는 중복이다.
    for (let i = 0; i < result.length; i++) {
      if (result[i][0] === v1 && result[i][1] === v2) return;
      if (result[i][0] === v2 && result[i][1] === v1) return;
    }
    result.push(array);
  }

  // 그래프에서 간선(v1, v2, weight)을 추출한다
  for (const v1 in graph.edges) {
    if (Object.hasOwnProperty.call(graph.edges, v1)) {
      for (const v2 in graph.edges[v1]) {
        if (Object.hasOwnProperty.call(graph.edges[v1], v2)) {
          const weight = graph.edges[v1][v2];
          redundancyCheck([v1, v2, weight]); // 중복된 간선을 검사한다
        }
      }
    }
  }
  return result;
};
const edges = graph.DistinctEdge(); // 그래프에서 간선을 중복 없이 추출

// 간선의 가중치를 기준으로 오름차순 정렬
const edgesSort = edges.sort((a, b) => a[2] - b[2]);
console.log(edgesSort);

const vertexs = Object.keys(graph.edges); // 그래프의 정점들

// 서로소 집합 자료구조 (변형)
class Set {
  constructor(vertexs = []) {
    this.vertexs = vertexs; // 그래프의 정점들
    this.set = {}; // 서로소 집합
  }

  // 그래프의 정점 수만큼 집합을 생성한다.
  makeSet() {
    for (let i = 0; i < this.vertexs.length; i++) {
      this.set[this.vertexs[i]] = -1; // 초기화
    }
  }

  // 정점 v가 속한 집합을 찾는다.
  find(v) {
    if (this.set[v] === -1) return v;
    return this.find(this.set[v]);
  }

  // 정점 v와 정점 u의 집합을 하나로 합친다
  union(_v, _u) {
    const [v, u] = [this.find(_v), this.find(_u)];
    if (v !== u) {
      this.set[v] = u; // 정점 u의 집합으로 합친다
    }
  }
}

const set = new Set(vertexs);
set.makeSet();

// kruskal의 최소비용 신장트리
UndirectedGraph.prototype.kruskal = function () {
  const mst = [];
  for (let i = 0; i < vertexs.length; i++) {
    if (mst.length >= vertexs.length - 1) break;
    if (set.find(edgesSort[i][0]) !== set.find(edgesSort[i][1])) {
      set.union(edgesSort[i][0], edgesSort[i][1]);
      mst.push(edgesSort[i]);
    }
  }
  return mst;
};
