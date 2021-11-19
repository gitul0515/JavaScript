// DFS를 활용한 미로찾기 문제
// 무방향 그래프 생성
function Graph() {
  this.edges = {}; // 간선을 저장하는 객체
}

// 정점 삽입 함수
Graph.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {};
};

// 간선 삽입 함수
Graph.prototype.addEdge = function (vertex1, vertex2, weight = 0) {
  this.edges[vertex1][vertex2] = weight;
  this.edges[vertex2][vertex1] = weight;
};

const graph = new Graph();

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

const start = '2'; // 출발점
const goal = '9'; // 도착점

// DFS를 활용한 미로찾기 함수
Graph.prototype.findMaze = function (start, goal, _visited = {}) {
  let finish = false; // goal에 도착했는가를 판정
  const visited = _visited; // 방문 여부를 기록

  // 해당 정점을 방문한다
  visited[start] = true;
  process.stdout.write(`${start} `);

  // goal에 도착한 경우
  if (start === goal) finish = true;

  for (const adjacent in this.edges[start]) { // 해당 정점의 인접 정점을 탐색한다
    if (Object.hasOwnProperty.call(this.edges[start], adjacent)) {
      if (!visited[adjacent] && !finish) { // 방문하지 않았고, goal에 도착하지 않았다면
        finish = this.findMaze(adjacent, goal, visited); // 해당 정점으로부터 재귀 호출
      }
    }
  }
  return finish;
};
graph.findMaze(start, goal);
