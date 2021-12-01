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
    this.distance = Array.from({ length: this.size }); // 시작 정점으로부터의 최단 거리
    this.visited = Array.from({ length: this.size }); // 방문한 정점 표시
    this.path = Array.from({ length: this.size }); // 경로 저장. path[도착점] = 출발점
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

  // Dijkstra의 최단 경로 알고리즘
  Dijkstra(start) {
    // 초기화
    this.distance = [...this.matrix[start]];
    this.visited.fill(false);
    this.path.fill(-1);

    this.visited[start] = true; //  시작 정점 방문 표시
    this.distance[start] = 0;

    for (let i = 0; i < this.size - 1; i++) {
      const u = this.minDistance();
      this.visited[u] = true;
      if (this.distance[u] === this.matrix[start][u]) { // 시작 정점에서 방문한 정점인 경우
        this.path[u] = start; // 경로 저장
      }

      for (let w = 0; w < this.size; w++) { // distance 배열을 갱신
        // 시작 정점에서 w로 갈 때, u를 거치는 경우와 거치지 않는 경우를 비교한다
        if (!this.visited[w]) {
          if (this.distance[u] + this.matrix[u][w] < this.distance[w]) { // 작은 것을 선택한다
            this.distance[w] = this.distance[u] + this.matrix[u][w];
            this.path[w] = u; // 경로 저장. path[도착점] = 출발점
          }
        }
      }
    }
    this.printResult(start);
  }

  // path 배열을 통해 경로를 추적한다. (from: 출발점, to: 도착점)
  searchPath(from, to) {
    /* 예: 출발점이 0이고 도착점이 6인 경우,
      path[] = { -1, 4, 1, 2, 0, 0, 4 } 에서 path[6] = 4이다.
      정점 4 -> 6으로 경로가 형성되었음을 의미한다.
      이어서 path[4] = 0, path[0] = -1을 확인하여
      경로를 추적할 수 있다. 0 -> 4 -> 6 */

    // 경로를 추적하여 search 배열에 저장한다. (도착점은 제외)
    let i = 0;
    const search = [];
    let v = this.path[to];
    while (v !== this.path[from]) { // search 배열에 역순으로 저장한다(출발점이 맨 끝에 저장)
      search[i++] = v;
      v = this.path[v];
    }

    // 경로를 문자열에 저장하여 반환한다.
    let result = '';
    for (i -= 1; i >= 0; i--) { // 출발점부터 저장
      result += `${search[i]} -> `;
    }
    result += `${to}`; // 도착점 저장
    return result;
  }

  // Dijkstra 알고리즘의 결과를 출력한다.
  printResult(start) {
    let result = '';

    for (let i = 0; i < this.size; i++) {
      result += `정점 ${start}로부터 정점 ${i}까지의 최단 경로\n`;
      result += `길이: ${this.distance[i]}, 경로: ${this.searchPath(start, i)}\n`;
      console.log(result);
      result = '';
    }
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
