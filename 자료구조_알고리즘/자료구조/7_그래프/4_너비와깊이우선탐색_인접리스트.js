// 너비 & 깊이우선탐색 알고리즘 (인접리스트 사용)
// 방향 그래프 생성자 함수
function DirectedGraph() {
  this.edges = {}; // 간선을 저장하는 객체
}

// 정점 삽입 함수
DirectedGraph.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {}; // this.edges 객체 안에 객체 형태로 저장한다.
};

// 간선 삽입 함수
DirectedGraph.prototype.addEdge = function (origVertex, destVertex, weight = 0) {
  // [출발점][도착점]
  this.edges[origVertex][destVertex] = weight;
};

const graph = new DirectedGraph();
// 정점 삽입
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');
graph.addVertex('H');
graph.addVertex('J');

// 간선 삽입
graph.addEdge('A', 'B', 1);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'E', 1);
graph.addEdge('C', 'D', 1);
graph.addEdge('D', 'G', 1);
graph.addEdge('D', 'F', 1);
graph.addEdge('G', 'H', 1);
graph.addEdge('F', 'J', 1);

console.log(graph);

// ----------- 큐 코드 시작 --------------
class Queue {
  #array; // private class member

  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.#array = array;
  }

  // 큐가 공백상태인지 확인한다.
  isEmpty() {
    return this.#array.length === 0;
  }

  // 큐의 가장 마지막에 데이터를 밀어 넣는다.
  enqueue(value) {
    return this.#array.push(value);
  }

  // 큐의 가장 처음 데이터를 꺼낸다.
  dequeue() {
    // 큐가 공백상태라면 null을 반환한다.
    if (this.isEmpty()) {
      return null;
    }
    return this.#array.shift();
  }

  // 큐의 가장 처음 데이터를 확인한다.
  peek() {
    // 큐가 공백상태라면 null을 반환한다.
    if (this.isEmpty()) {
      return null;
    }
    return this.#array[0];
  }

  // 큐의 복사본 배열을 반환한다.
  entries() {
    return this.#array.slice();
  }
}
// ----------- 큐 코드 종료 --------------

// 공백 상태 검출 함수
DirectedGraph.prototype.isEmpty = function () {
  // this.edges 객체에 프로퍼티가 없으면 공백 상태이다.
  return Object.keys(this.edges).length === 0;
};

// 너비우선탐색 함수
DirectedGraph.prototype.BFSearch = function (_vertex) {
  if (this.isEmpty()) return null;

  let vertex = _vertex;
  const queue = new Queue([vertex]);
  const visited = { vertex: false }; // 방문 여부를 기록

  process.stdout.write(`정점 ${vertex}로부터 너비우선탐색: `);
  while (!queue.isEmpty()) {
    vertex = queue.dequeue(); // 큐에서 정점을 꺼내어 방문한다
    visited[vertex] = true;
    process.stdout.write(`${vertex} `);
    for (const adjVertex in this.edges[vertex]) { // 꺼낸 정점의 인접 정점을 탐색한다
      if (Object.hasOwnProperty.call(this.edges[vertex], adjVertex)) {
        if (!visited[adjVertex]) { // 방문하지 않은 인접 정점만 큐에 삽입한다
          queue.enqueue(adjVertex);
        }
      }
    }
  }
};
graph.BFSearch('A'); // A B C E D G F H J
console.log();

// 깊이우선탐색 함수 (순환)
DirectedGraph.prototype.DFSearch = function (vertex, _visited = {}) {
  const visited = _visited; // 방문 여부를 기록

  // 해당 정점을 방문한다
  visited[vertex] = true;
  process.stdout.write(`${vertex} `);
  for (const adjacentVertex in this.edges[vertex]) { // 해당 정점의 인접 정점을 탐색한다
    if (Object.hasOwnProperty.call(this.edges[vertex], adjacentVertex)) {
      if (!visited[adjacentVertex]) { // 방문하지 않은 인접 정점을 깊이우선탐색 (순환)
        this.DFSearch(adjacentVertex, visited);
      }
    }
  }
};
graph.DFSearch('A'); // A B C D G H F J E
