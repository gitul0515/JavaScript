// 방향 그래프 알고리즘 (인접 리스트)
function DirectedGraph() {
  this.edges = {};
}

// 유효한 숫자인지 판별하는 함수
DirectedGraph.prototype.isNumber = function (value) {
  return typeof value === 'number' && Number.isFinite(value);
};

// 정점 삽입 함수
DirectedGraph.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {};
};

// 간선 삽입 함수
DirectedGraph.prototype.addEdge = function (origVertex, destVertex, weight) {
  // 가중치가 유효한 숫자인지 확인한다
  if (!this.isNumber(weight)) {
    throw new TypeError('weight must be number');
  }

  // 유효한 정점인지 확인 후 간선을 만든다
  if (this.edges[origVertex] && this.edges[destVertex]) {
    this.edges[origVertex][destVertex] = weight;
  } else {
    throw new TypeError('invalid vertex');
  }
};

const graph = new DirectedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B', 10);
graph.addEdge('A', 'C', 10);
graph.addEdge('B', 'C', 10);
graph.addEdge('C', 'B', 10);

console.log(graph);

// 간선 제거 함수
DirectedGraph.prototype.removeEdge = function (origVertex, destVertex) {
  if (this.edges[origVertex] && this.edges[origVertex][destVertex] !== undefined) {
    delete this.edges[origVertex][destVertex];
  }
};

// 정점 제거 함수
DirectedGraph.prototype.removeVertex = function (vertex) {
  // vertex의 진출 간선을 제거
  for (const destVertex in this.edges[vertex]) {
    if (Object.hasOwnProperty.call(this.edges[vertex], destVertex)) {
      this.removeEdge(vertex, destVertex);
    }
  }
  // vertex의 진입 간선을 제거
  for (const origVertex in this.edges) {
    if (Object.hasOwnProperty.call(this.edges, origVertex)) {
      for (const destVertex in this.edges[origVertex]) {
        if (destVertex === vertex) {
          this.removeEdge(origVertex, vertex);
        }
      }
    }
  }
  // vertex를 제거
  delete this.edges[vertex];
};

graph.removeEdge('A', 'C');
console.log(graph.edges);
graph.removeVertex('B');
console.log(graph.edges);
