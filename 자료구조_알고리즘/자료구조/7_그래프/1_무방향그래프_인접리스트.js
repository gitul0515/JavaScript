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
graph.addEdge(1, 2, 1);
graph.addVertex(3); graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(1, 5, 88);
graph.addEdge(2, 3, 8);
graph.addEdge(3, 4, 10);
graph.addEdge(4, 5, 100);
console.log(graph.edges);

// 간선 삭제 함수
UndirectedGraph.prototype.removeEdge = function (vertex1, vertex2) {
  // 해당 정점들과 간선이 존재하는지 확인한 후 삭제한다
  if (this.edges[vertex1] && this.edges[vertex1][vertex2] !== undefined) {
    delete this.edges[vertex1][vertex2];
  }
  if (this.edges[vertex2] && this.edges[vertex2][vertex1] !== undefined) {
    delete this.edges[vertex2][vertex1];
  }
};

// 정점 삭제 함수
UndirectedGraph.prototype.removeVertex = function (vertex) {
  // 정점을 삭제하기 전에
  // 해당 정점과 연결된 모든 간선을 삭제한다.
  for (const adjacentVertex in this.edges[vertex]) {
    if (Object.prototype.hasOwnProperty.call(this.edges[vertex], adjacentVertex)) {
      this.removeEdge(vertex, adjacentVertex);
    }
  }
  delete this.edges[vertex];
};

graph.removeVertex(5);
console.log(graph.edges);
graph.removeVertex(1);
console.log(graph.edges);
graph.removeEdge(2, 3);
console.log(graph.edges);
