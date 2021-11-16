// 인접 행렬을 사용하여 무방향그래프를 생성하세요
class Graph {
  constructor(size = 1) {
    this.size = size;
    this.matrix = [];
    for (let i = 0; i < size; i++) {
      this.matrix.push([]);
      for (let j = 0; j < size; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  // 정점 삽입 메서드
  addVertex() {
    this.size++;
    this.matrix.push([]);
    for (let i = 0; i < this.size; i++) {
      this.matrix[i][this.size - 1] = 0;
      this.matrix[this.size - 1][i] = 0;
    }
  }

  // 간선 삽입 메서드
  addEdge(vertex1, vertex2, weight) {
    if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
      throw new TypeError('Invalid vertex');
    } else if (vertex1 === vertex2) {
      throw new TypeError('Same vertex');
    } else if (!Graph.weightIsNumber(weight)) {
      throw new TypeError('weight must be number');
    } else {
      this.matrix[vertex1][vertex2] = weight;
      this.matrix[vertex2][vertex1] = weight;
    }
  }

  // 가중치의 유효성을 확인 (유한한 숫자이어야 한다)
  static weightIsNumber(weight) {
    return typeof weight === 'number' && Number.isFinite(weight);
  }

  // 간선 삭제 메서드
  removeEdge(vertex1, vertex2) {
    if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
      console.log('Invalid vertex');
    } else if (vertex1 === vertex2) {
      console.log('Same vertex');
    } else {
      this.matrix[vertex1][vertex2] = 0;
      this.matrix[vertex2][vertex1] = 0;
    }
  }

  // 정점 삭제 메서드
  removeVertex(_vertex) {
    let vertex = _vertex;
    if (vertex < 0 || vertex > this.size - 1) {
      console.log('Invalid vertex');
    } else {
      while (vertex < this.size - 1) {
        for (let i = 0; i < this.size; i++) {
          this.matrix[vertex][i] = this.matrix[vertex + 1][i];
        }

        for (let i = 0; i < this.size; i++) {
          this.matrix[i][vertex] = this.matrix[i][vertex + 1];
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
      let result = '';
      for (let j = 0; j < this.size; j++) {
        result += `${this.matrix[i][j]} `;
      }
      console.log(result);
    }
  }
}

const graph = new Graph(4);
graph.addVertex();
graph.addEdge(1, 2, 4 / 0);
graph.addEdge(0, 2, 1);
graph.addEdge(0, 3, 1);
graph.addEdge(2, 1, 1);
graph.addEdge(3, 2, 1);
graph.printMatrix();
console.log();

graph.removeEdge(0, 1);
graph.removeEdge(2, 1);
graph.printMatrix();
console.log();

graph.removeVertex(1);
graph.printMatrix();
