// 너비 & 깊이우선탐색 알고리즘 (인접리스트 사용)
// 무방향 그래프 생성자 함수
function DirectedGraph() {
  this.edges = {}; // 간선을 저장하는 객체
}

// 정점 삽입 함수
DirectedGraph.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {}; // this.edges 객체 안에 객체 형태로 저장한다.
};

// 간선 삽입 함수
DirectedGraph.prototype.addEdge = function (vertex1, vertex2, weight = 0) {
  this.edges[vertex1][vertex2] = weight;
  this.edges[vertex2][vertex1] = weight;
};

const graph = new DirectedGraph();

// --------- 미로를 그래프로 변환한다 ---------
// 정점 삽입
for (let i = 0; i < 16; i++) {
  graph.addVertex(i);
}

// 간선 삽입
graph.addEdge('0', '1', 1);
graph.addEdge('0', '2', 1);
graph.addEdge('2', '3', 1);
graph.addEdge('2', '4', 1);
graph.addEdge('4', '5', 1);
graph.addEdge('4', '10', 1);
graph.addEdge('5', '6', 1);
graph.addEdge('6', '7', 1);
graph.addEdge('6', '8', 1);
graph.addEdge('8', '9', 1);
graph.addEdge('8', '10', 1);
graph.addEdge('10', '11', 1);
graph.addEdge('11', '12', 1);
graph.addEdge('12', '15', 1);
graph.addEdge('12', '13', 1);
graph.addEdge('13', '14', 1);
console.log(graph);

const start = '0'; // 출발점
const goal = '11'; // 도착점

// DFS를 활용한 미로찾기 함수
DirectedGraph.prototype.findMaze = function (start, goal, _visited = {}) {
  let finish = false; // goal에 도착했는가를 판정
  const visited = _visited; // 방문 여부를 기록

  // 해당 정점을 방문한다
  visited[start] = true;
  process.stdout.write(`${start} `);

  // goal에 도착한 경우
  if (start === goal) finish = true;

  for (const adjacent in this.edges[start]) { // 해당 정점의 인접 정점을 탐색한다
    if (Object.hasOwnProperty.call(this.edges[start], adjacent)) {
      if (!visited[adjacent] && !finish) { // 방문하지 않은 정점이며, goal에 도착하지 않은 경우
        finish = this.findMaze(adjacent, goal, visited);
      }
    }
  }
  return finish;
};
graph.findMaze(start, goal);
