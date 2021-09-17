//퀵 정렬 프로그램
#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#define MAX_SIZE 10
#define SWAP(X,Y,T) ((T)=(X),(X)=(Y),(Y)=(T))

void print_list(int* list, int pivot);
void quick_sort(int* list, int left, int right);
int partition(int* list, int left, int right);

int main()
{
	int i;
	int num = MAX_SIZE;
	int list[MAX_SIZE];

	// 난수를 생성하여 배열에 저장한다.
	printf("초기값: ");
	srand(time(NULL));
	for (i = 0; i < num; i++) {
		list[i] = (rand() % 100) + 1; // 난수 범위: 1~100
		printf("%d ", list[i]);
	}
	printf("\n\n");

	// 퀵 정렬 호출
	// 배열의 주소, 시작 인덱스, 마지막 인덱스를 전달한다.
	quick_sort(list, 0, num - 1); 

	return 0;
}

void quick_sort(int* list, int left, int right)
{
	int q;
	if (left < right)   //리스트의 요소가 2개 이상일 때
	{
		q = partition(list, left, right);
		quick_sort(list, left, q - 1);
		quick_sort(list, q + 1, right);
	}
}

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

	// 현재까지의 정렬 결과를 출력한다.
	print_list(list, pivot);

	return i + 1; // 피벗의 위치를 반환한다.
}

// 정렬의 결과를 출력하는 함수
void print_list(int* list, int pivot) {
	int i;
	static int level = 0; // level은 partition 함수가 실행된 횟수

	printf("level %d\n", ++level);
	printf("========================================\n");
	printf("pivot: %d\n", pivot);
	printf("result: ");
	for (i = 0; i < MAX_SIZE; i++)
		printf("%d ", list[i]);
	printf("\n\n");
}