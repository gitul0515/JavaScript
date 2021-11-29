// Dijkstra의 최단 경로 알고리즘
// 무방향 그래프 (인접 행렬)
class Graph {
  constructor(size = 1) {
    this.size = size;

    // 원본 데이터를 저장할 2차원 배열 초기화
    this.matrix = [];
    for (let i = 0; i < size; i++) {
      this.matrix.push([]);
      for (let j = 0; j < size; j++) {
        if (i === j) this.matrix[i][j] = 0; // 자신은 0으로 초기화
        else this.matrix[i][j] = Infinity; // 다른 정점들은 Infinity로 초기화
      }
    }
    this.distance = []; // 시작 정점으로부터의 최단경로 거리
    this.visited = []; // 방문한 정점 표시;

    const route = ['', '', '', '', '', ''];
  }

  // 간선 삽입 메서드
  addEdge(vertex1, vertex2, weight) {
    if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
      throw new TypeError('Invalid vertex');
    } else if (vertex1 === vertex2) {
      throw new TypeError('Same vertex');
    } else {
      this.matrix[vertex1][vertex2] = weight;
      this.matrix[vertex2][vertex1] = weight;
    }
  }

  // 원본 데이터를 출력하는 메서드
  printMatrix() {
    for (let i = 0; i < this.size; i++) {
      let result = '';
      for (let j = 0; j < this.size; j++) {
        if (this.matrix[i][j] === Infinity) result += '* ';
        else result += `${this.matrix[i][j]} `;
      }
      console.log(result);
    }
  }

  // distance가 가장 작은 정점을 찾는 메서드
  minDistance() {
    let min = Infinity;
    let minPos = -1;
    for (let i = 0; i < this.size; i++) {
      if (this.distance[i] < min && !this.visited[i]) {
        min = this.distance[i];
        minPos = i;
      }
    }
    return minPos;
  }

  // distance 배열을 출력한다.
  printDistance() {
    let result = '';
    for (let i = 0; i < this.size; i++) {
      result += `${this.distance[i]} `;
    }
    console.log(result);
  }

  // Dijkstra의 최단 경로 알고리즘
  Dijkstra(start) {
    // 초기화
    this.distance = this.matrix[start];
    this.visited.fill(false);

    this.visited[start] = true; //  시작 정점 방문 표시
    this.distance[start] = 0;
    this.route.forEach(elem => { elem += `${start} `; });

    for (let i = 0; i < this.size - 1; i++) {
      const u = this.minDistance();
      this.visited[u] = true;
      this.route.forEach(elem => { elem += `${u} `; });

      for (let w = 0; w < this.size; w++) { // distance 배열을 갱신
        // 시작 정점에서 w로 갈 때, u를 거치는 경우와 거치지 않는 경우를 비교한다
        if (!this.visited[w]) {
          if (this.distance[u] + this.matrix[u][w] < this.distance[w]) { // 작은 것을 선택한다
            this.distance[w] = this.distance[u] + this.matrix[u][w];
          }
        }
      }
    }
    this.printDistance();
  }
}
const graph = new Graph(7);



// 간선 삽입
graph.addEdge(0, 1, 7);
graph.addEdge(0, 4, 3);
graph.addEdge(0, 5, 10);
graph.addEdge(1, 2, 4);
graph.addEdge(1, 3, 10);
graph.addEdge(1, 4, 2);
graph.addEdge(1, 5, 6);
graph.addEdge(2, 3, 2);
graph.addEdge(3, 4, 11);
graph.addEdge(3, 5, 9);
graph.addEdge(3, 6, 4);
graph.addEdge(4, 6, 5);
graph.Dijkstra(0);
