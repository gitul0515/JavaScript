//퀵 선택 알고리즘의 활용 (작성자: 2014044120 권기홍)
#include<stdio.h>
#include<stdlib.h>
#define MAX_SIZE 16 + 1
#define SWAP(X,Y,T) ((T)=(X),(X)=(Y),(Y)=(T))

int proximity_search(int* list, int anchor_num, int prox);
int partition(int* list, int left, int right);
int quickSlection(int list[], int l, int r, int i);
void print_list(int* list, int pivot);

int main()
{
  int anchor_num; // 기준 숫자 
	int prox; // 근접 거리
	int list[MAX_SIZE] = { 21, 10, 34, 41, 30, 12, 19, 7, 
                         43, 28, 56, 50, 91, 83, 81, 75, }; // 샘플 데이터

  // 사용자로부터 탐색 정보를 입력받는다.
  printf("기준점을 입력하세요: ");
  scanf("%d", &anchor_num);
  printf("몇 번째로 근접한 숫자를 찾을까요? ");
  scanf("%d", &prox);

  // 근접값 탐색 함수를 호출한다.
  int result = proximity_search(list, anchor_num, prox);

  // 결과값을 출력한다.
  printf("결과값: %d", result);

	return 0;
}

// anchor_num에서 prox번째로 값이 근접한 숫자를 탐색한다.
int proximity_search(int* list, int anchor_num, int prox) {
  int p_index;
  int p_location;

  // 기준 숫자를 배열의 마지막 위치에 삽입한다.
  list[MAX_SIZE - 1] = anchor_num;

  // 퀵 정렬 파티션 함수를 호출한다.
  // 기준 숫자를 피벗으로 하여 정렬이 1번 수행된다.
  p_index = partition(list, 0, MAX_SIZE - 1);

  // 기준 숫자(피벗)는 전체에서 p_location번째 작은 원소다.
  p_location = p_index + 1;

  // prox가 p_location보다 작으면 왼쪽 그룹으로 범위를 좁힌다.
  // quickSlection 함수를 호출하여
  // (p_location - prox)번째로 작은 숫자를 탐색한다.
  if (prox < p_location) {
    return quickSlection(list, 0, p_index - 1, p_location - prox); 
  } else if (prox >= p_location) { // prox가 p_location 이상이면 오른쪽 그룹으로 범위를 좁힌다.
    // quickSlection 함수를 통해 prox번째로 작은 숫자를 탐색한다.
    return quickSlection(list, p_index + 1, MAX_SIZE - 1, prox);
  }
}

// 배열 list[l...r]에서 i번째로 작은 원소를 탐색한다.
int quickSlection(int list[], int l, int r, int i) {
  if (l == r) return list[l]; // 원소가 하나밖에 없으면 i는 1이다.

  int p_index = partition(list, l, r);
  int p_location = p_index - l + 1; // 피벗은 전체에서 p_location번째 작은 원소이다.

  if (i < p_location) 
    return quickSlection(list, l, p_index - 1, i); // 왼쪽 그룹으로 범위를 좁힌다.
  else if (i > p_location)
    return quickSlection(list, p_index + 1, r, i - p_location); // 오른쪽 그룹으로 범위를 좁힌다.
  else return list[p_index]; // 기준 원소가 바로 찾는 원소다.
}

// 퀵 정렬 파티션 함수
int partition(int* list, int left, int right)
{
	int pivot = list[right];
	int i = left - 1;
	int temp;

	for (int j = left; j < right; j++)
		if (list[j] <= pivot) {
			i++;
			SWAP(list[i], list[j], temp);
		}
	SWAP(list[i + 1], list[right], temp);

  print_list(list, i + 1);

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