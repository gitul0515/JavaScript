// 방향 그래프 구현 (인접 리스트 사용)
// 생성자 함수
function directedGraph() {
  this.edges = {}; // 간선을 저장하는 객체
}

// 정점 삽입 함수
directedGraph.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {}; // this.edges 객체 안에 객체 형태로 저장한다.
}

// 간선 삽입 함수
directedGraph.prototype.addEdge = function (origVertex, destVertex, weight = 0) {
  // [출발점][도착점]
  this.edges[origVertex][destVertex] = weight;
}

const graph = new directedGraph();
// 정점 삽입
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D'); 
graph.addVertex('E');
graph.addVertex('J'); 

// 간선 삽입
graph.addEdge('A', 'B', 1);
graph.addEdge('B', 'C', 2);
graph.addEdge('C', 'A', 3);
graph.addEdge('A', 'D', 4);
graph.addEdge('B', 'E', 5);
graph.addEdge('E', 'B', 6);
graph.addEdge('D', 'C', 7);
graph.addEdge('A', 'J', 8);

console.log(graph);

// 간선 삭제 함수
directedGraph.prototype.removeEdge = function (origVertex, destVertex) {
  if (this.edges[origVertex] && this.edges[origVertex][destVertex] !== undefined) {
    delete this.edges[origVertex][destVertex];
  }
}

// 정점 삭제 함수
directedGraph.prototype.removeVertex = function (vertex) {
  // vertex의 진출 간선을 제거
  for (let destVertex in this.edges[vertex]) {
    this.removeEdge(vertex, destVertex);
  }

  // vertex의 진입 간선을 제거
  // vertext를 도착점으로 하는 정점을 찾는다
  for (let origVertex in this.edges) {
      for (let destVertex in this.edges[origVertex]) {
        if (destVertex === vertex) {
          this.removeEdge(origVertex, vertex);
        }
      }
  }
  delete this.edges[vertex];
}

// 간선 삭제
graph.removeEdge('D', 'C');
graph.removeEdge('A', 'B');
graph.removeEdge('B', 'E');
console.log(graph);

// 정점 삭제
graph.removeVertex('B');
graph.removeVertex('C');
graph.removeVertex('J');
graph.removeVertex('D');
graph.removeVertex('E');
graph.removeVertex('A');
console.log(graph);
