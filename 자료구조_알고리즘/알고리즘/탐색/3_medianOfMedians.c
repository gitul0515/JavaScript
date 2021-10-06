//퀵 선택 알고리즘의 활용 (작성자: 2014044120 권기홍)
#include<stdio.h>
#include<stdlib.h>
#define MAX_SIZE 16 + 1 // 샘플 데이터 + 기준 숫자
#define SWAP(X,Y,T) ((T)=(X),(X)=(Y),(Y)=(T)) // X와 Y를 교환하는 매크로 함수

int proximity_search(int* list, int anchor_num, int prox);
int linearSelect(int list[], int l, int r, int i);
int partition(int* list, int left, int right);
void print_list(int* list, int pivot);
void selection_sort(int* list, int l, int r);

int main()
{
  int anchor_num; // 기준 숫자 
	int prox; // 근접 거리
	int list[MAX_SIZE] = { 21, 10, 34, 75, 41, 30, 12, 19, 
                         56, 50, 7, 43, 28, 91, 83, 81, }; // 샘플 데이터

  // 사용자로부터 탐색 정보를 입력받는다.
  printf("기준 숫자를 입력하세요: ");
  scanf("%d", &anchor_num);
  printf("몇 번째로 근접한 숫자를 찾을까요? ");
  scanf("%d", &prox);
  printf("\n");

  // 근접값 탐색 함수를 호출한다.
  int result = proximity_search(list, anchor_num, prox);

  // 결과값을 출력한다.
  printf("결과값: %d", result);

	return 0;
}

// anchor_num과 prox번째로 값이 근접한 숫자를 탐색한다.
int proximity_search(int* list, int anchor_num, int prox) {
  // 기준 숫자를 배열의 마지막 위치에 삽입한다.
  list[MAX_SIZE - 1] = anchor_num;

  // 파티션 함수를 호출한다.
  // 기준 숫자를 피벗으로 하여 정렬이 1번 수행된다.
  int p_index = partition(list, 0, MAX_SIZE - 1);

  // 기준 숫자(피벗)는 전체에서 p_location번째 작은 원소다.
  int p_location = p_index + 1;

  // prox가 p_location보다 작으면 왼쪽 그룹으로 범위를 좁힌다.
  // linearSelect 함수를 호출한다.
  if (prox < p_location) {
    return linearSelect(list, 0, p_index - 1, p_location - prox);
  } else if (prox >= p_location) { // prox가 p_location 이상이면 오른쪽 그룹으로 범위를 좁힌다.
    return linearSelect(list, p_index + 1, MAX_SIZE - 1, prox); // linearSelect 함수를 호출한다.
  }
}

// 배열 list[l...r]에서 i번째로 작은 원소를 탐색한다.
int linearSelect(int* list, int l, int r, int i) {
  // 원소가 하나뿐이라면 i는 반드시 1이다.
  // 첫번째 값을 반환한다.
  if (l == r) return list[l];

  // 배열의 원소가 5개 이하면
  // 배열을 정렬한 뒤, 원하는 원소를 반환하고 끝낸다.
  int size = r - l + 1;
  if (size <= 5) {
    selection_sort(list, l, r);
    return list[l + i - 1];
  }

  // 배열을 5개씩의 원소를 가진 m개의 하위 배열로 나눈다.
  int m = (size + 4) / 5; // 올림 계산: 배열 사이즈에 4를 더하고 5로 나눈다.

  // 각 하위 배열의 중앙값을 저장할 배열 선언 (동적 할당)
  int *median = (int*)malloc(sizeof(int) * m);

  for (int j = 0; j < m; j++) {
    // 마지막 하위 배열이 아닌 경우 (원소 5개)
    if (5 * (j + 1) < size) {
      selection_sort(list, 5 * j, 5 * j + 4); // 하위 배열을 정렬한다.
      median[j] = list[5 * j + 2]; // 하위 배열의 중앙값을 median에 저장한다.
    } else { // 마지막 하위 배열인 경우 (원소 5개 이하)
      selection_sort(list, 5 * j, r); // 하위 배열을 정렬한다. r은 마지막 인덱스
      int endMid = (5 * j + r) / 2; // 하위 배열의 중앙값을 median에 저장한다.
      median[j] = list[endMid];
    }
  }

  // 중앙값의 중앙값을 linearSelect를 재귀 호출해서 찾아낸다.
  int medianOfMedians = linearSelect(median, 0, m - 1, m / 2 + 1);

  // 중앙값의 중앙값을 pivot으로 설정한다.
  int pivot = medianOfMedians;

  // median 배열은 불필요하므로 삭제
  free(median);

  // pivot을 배열의 마지막 인덱스로 보낸다.
  for (int j = 0; j < size; j++) {
    if (list[j] == pivot) {
      int temp;
      SWAP(list[j], list[size - 1], temp);
    }
  }

  // 파티션 함수를 호출하여 pivot으로 전체 원소를 분할한다.
  int p_index = partition(list, l, r);
  int p_location = p_index - l + 1; // pivot은 배열에서 p_location번째 작은 원소다.

  if (i < p_location) // pivot의 순서보다 작은 원소를 찾으면
    return linearSelect(list, l, p_index - 1, i); // 왼쪽 그룹으로 범위를 좁힌다.
  else if (i > p_location) // pivot의 순서보다 큰 원소를 찾으면
    return linearSelect(list, p_index + 1, r, i - p_location); // 오른쪽 그룹으로 범위를 좁힌다.
  else return list[p_index]; // pivot의 순서와 일치하면, pivot이 바로 찾는 원소다.
}

// 파티션 함수
int partition(int* list, int left, int right)
{
  // i가 가리키는 위치에는 피벗보다 작은 값이,
  // j가 가리키는 위치에는 피벗보다 큰 값이 오도록 정렬한다.
	int pivot = list[right]; // 마지막에 위치한 요소를 피벗으로 할당한다.
	int i = left - 1;
	int temp;

	for (int j = left; j < right; j++)
		if (list[j] <= pivot) { // j에 저장된 요소가 피벗보다 작거나 같으면
			i++;
			SWAP(list[i], list[j], temp); // i를 1 증가시킨 후, i의 요소와 j의 요소를 교환한다.
		}
	SWAP(list[i + 1], list[right], temp); // i+1의 요소와 피벗을 교환한다.

  print_list(list, i + 1); // 정렬 결과를 출력한다.

	return i + 1; // 피벗의 위치를 반환한다.
}

// 정렬의 결과를 출력하는 함수
void print_list(int* list, int pivot_index) {
	int i;
	static int level = 0; // level은 partition 함수가 실행된 횟수

	printf("level %d\n", ++level);
	printf("========================================\n");
	printf("pivot: %d\n", list[pivot_index]);
	printf("result: ");
	for (i = 0; i < MAX_SIZE; i++)
		printf("%d ", list[i]);
	printf("\n\n");
}

// 배열 list[l...r]을 선택 정렬한다.
void selection_sort(int* list, int l, int r)
{
	int i, j, least, temp;
	for (i = l; i < r; i++)
	{
		least = i;
		for (j = i + 1; j <= r; j++)
			if (list[least] > list[j]) least = j; // 최소값 탐색
		if (i!=least)
			SWAP(list[i], list[least], temp); // 최소값이 변경된 경우에만 교환한다.
	}
}
