#include <stdio.h>
#include <string.h>
#define MAX(a, b) (((a) > (b)) ? (a) : (b))

// 문자열 X[i...j]의 모든 부분 문자열 중 
// 가장 긴 회문(palindrome)의 길이를 찾는다
int longest_palindrome_len(char* X, int i, int j) {
  int result;
  if (i > j) result = 0;
  else if (i == j) result = 1;
  else if (i < j && X[i] == X[j])
    result = longest_palindrome_len(X, i + 1, j - 1) + 2;
  else
    result = MAX(longest_palindrome_len(X, i, j - 1), longest_palindrome_len(X, i + 1, j));
  return result;
}

int main() {
  char* X = "ABBCDAA";
  printf("result: %d\n", longest_palindrome_len(X, 0, strlen(X) - 1));

  return 0;
}