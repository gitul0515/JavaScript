// Floyd의 최단 경로 알고리즘
// 무방향 그래프 (인접 행렬)
class Graph {
  constructor(size = 1) {
    this.size = size;

    // 2차원 배열 생성
    this.matrix = []; // 원본 데이터
    for (let i = 0; i < size; i++) {
      this.matrix.push([]);
      for (let j = 0; j < size; j++) {
        if (i === j) this.matrix[i][j] = 0; // 자신은 0으로 초기화
        else this.matrix[i][j] = Infinity; // 다른 정점들은 Infinity로 초기화
      }
    }
    this.distance = []; // 최단 경로를 저장할 배열
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

  // 행렬을 출력하는 메서드
  print(matrix) {
    for (let i = 0; i < this.size; i++) {
      let result = '';
      for (let j = 0; j < this.size; j++) {
        if (matrix[i][j] === Infinity) result += '* ';
        else result += `${matrix[i][j]} `;
      }
      console.log(result);
    }
  }

  // floyd의 최단 경로 알고리즘
  floyd() {
    // 최단경로를 갱신하여 저장하는 배열
    this.distance = this.matrix; // 초기화

    for (let k = 0; k < this.size; k++) {
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          if (this.distance[i][k] + this.distance[k][j] < this.distance[i][j]) {
            this.distance[i][j] = this.distance[i][k] + this.distance[k][j];
          }
        }
      }
    }
    this.print(this.distance);
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
graph.floyd();
