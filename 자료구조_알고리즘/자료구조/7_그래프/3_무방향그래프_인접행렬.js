// 무방향 그래프 구현 (인접 행렬 사용)
class Graph {
  constructor(size = 1) {
    this.size = size;

     // 2차원 배열 생성
    this.matrix = [];
    for (let i = 0; i < size; i++) {
      this.matrix.push([]);
      for (let j = 0; j < size; j++) {
        this.matrix[i][j] = 0; // 0으로 초기화
      }
    }
  }

  // 정점 추가 메서드
  addVertex() {
    this.size++;
    this.matrix.push([]);
    for (let i = 0; i < this.size; i++) {
      this.matrix[i][this.size - 1] = 0;
      this.matrix[this.size - 1][i] = 0;
    }
  }

  // 간선 추가 메서드
  addEdge(vertex1, vertex2, weight = 1) {
    if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
      console.log('invalid vertex');
    } else if (vertex1 === vertex2) {
      console.log('same vertex');
    } else {
      this.matrix[vertex1][vertex2] = weight;
      this.matrix[vertex2][vertex1] = weight;
    }
  }

  // 간선 제거 메서드
  removeEdge(vertex1, vertex2) {
    if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
      console.log('invalid vertex');
    } else if (vertex1 === vertex2) {
      console.log('same vertex');
    } else {
      this.matrix[vertex1][vertex2] = 0;
      this.matrix[vertex2][vertex1] = 0;
    }
  }

  // 정점 제거 메서드
  removeVertex(vertex) {
    if (vertex < 0 || vertex > this.size - 1) {
      console.log('invalid vertex');
    } else {
      while (vertex < this.size - 1) {
        for (let i = 0; i < this.size; i++) {
          this.matrix[i][vertex] = this.matrix[i][vertex + 1];
        }
        for (let i = 0; i < this.size; i++) {
          this.matrix[vertex][i] = this.matrix[vertex + 1][i];
        }
        vertex++;
      }
      this.matrix.pop();
      this.size--;
    }
  }

  // 행렬 출력 메서드
  printMatrix() {
    for (let i = 0; i < this.size; i++) {
      let row = '';
      for (let j = 0; j < this.size; j++) {
        row += `${this.matrix[i][j]} `;
      }
      console.log(row);
    }
  }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(0, 1, 1);
graph.addEdge(0, 2, 1);
graph.addEdge(0, 3, 1);
graph.addEdge(1, 2, 1);
graph.addEdge(2, 3, 1);
graph.printMatrix();
console.log();

graph.removeEdge(0, 2);
graph.removeEdge(1, 2);
graph.printMatrix();
console.log();

graph.removeVertex(1);
graph.printMatrix();

