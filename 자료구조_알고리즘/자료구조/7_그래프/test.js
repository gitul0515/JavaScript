// 무방향 그래프 알고리즘 (인접 리스트)
function UndirectedGraph() {
  this.edges = {};
}

// 숫자인지 판별하는 함수
UndirectedGraph.prototype.isNumber = function (value) {
  return typeof value === 'number' && Number.isFinite(value);
};

// 정점 삽입 함수
UndirectedGraph.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {}; // 정점을 객체 형태로 저장
};

// 간선 삽입 함수
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
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A', 'B', 1);
console.log(graph.edges);

// 간선 삭제 함수
UndirectedGraph.prototype.removeEdge = function (vertex1, vertex2) {
  if (this.edges[vertex1] && this.edges[vertex1][vertex2] !== undefined) {
    delete this.edges[vertex1][vertex2];
  }
  if (this.edges[vertex2] && this.edges[vertex2][vertex1] !== undefined) {
    delete this.edges[vertex2][vertex1];
  }
};

// 정점 삭제 함수
UndirectedGraph.prototype.removeVertex = function (vertex) {
  // 정점을 삭제하기 전에 연결된 간선을 삭제한다.
  for (const adjacentVertex in this.edges[vertex]) {
    if (Object.hasOwnProperty.call(this.edges[vertex], adjacentVertex)) {
      this.removeEdge(vertex, adjacentVertex);
    }
  }
  delete this.edges[vertex];
};

// graph.removeEdge('A', 'B');
graph.removeVertex('A');
console.log(graph.edges);
