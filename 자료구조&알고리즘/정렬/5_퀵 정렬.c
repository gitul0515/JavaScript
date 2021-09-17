//퀵 정렬 프로그램
#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#define MAX_SIZE 8
#define SWAP(X,Y,T) ((T)=(X),(X)=(Y),(Y)=(T))

void quick_sort(int* list, int left, int right);
int partition(int* list, int left, int right);

int main()
{
	int i;
	int num = MAX_SIZE;
	int list[MAX_SIZE];
	srand(time(NULL));
	for (i = 0; i < num; i++) // 8개의 난수 생성
		list[i] = (rand() % 100) + 1; // 난수 범위: 1~100
	
	quick_sort(list, 0, num - 1); //퀵 정렬 호출
								  //첫 인덱스와 마지막 인덱스 전달
	for (i = 0; i < num; i++)
		printf("%d ", list[i]);
	printf("\n");
	return 0; 
}

void quick_sort(int* list, int left, int right)
{
	int q;
	if (left < right) //리스트의 요소가 2개 이상일 때
	{
		q = partition(list, left, right);
		quick_sort(list, left, q - 1);
		quick_sort(list, q + 1, right);
	}
}

int partition(int* list, int left, int right)
{
	int low, high, pivot, temp;
	low = left;       //do-while문을 고려하여 값을 할당
	high = right + 1; //low는 left+1부터, high는 right부터 시작
	pivot = left;     //pivot에는 첫번째 요소를 할당
	do
	{
		do
			low++;
		while (list[low] < list[pivot]); // 리스트의 범위를 초과하면 거짓으로 판정
		do                               // 값이 같을 경우에도 거짓으로 판정(안정성)
			high--;
		while (list[high] > list[pivot]);
		if (low < high) SWAP(list[low], list[high], temp);
	} while (low < high);
	
	SWAP(list[pivot], list[high], temp);
	return high;	  //pivot값이 저장된 인덱스를 반환
}