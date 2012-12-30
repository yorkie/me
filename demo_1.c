#include <stdio.h>
#define MAX 20

void main() {
  
  int a[MAX], b[10] = {0}, temp = -1;
  printf("亲，请输入%d个10以内的正整数\n", MAX);

  for (int i = 0; i < MAX;) {
    scanf_s("%d", &temp);
    if (temp > 0 && temp < 10) {
      a[i++] = temp;
      b[temp]++;
      printf("%d/%d\n", i, MAX);
    }
    else {
      printf("请重新输入一个10以内的正整数\n");
    }
  }
  
  for (int i = 0; i < 10; i++) {
    printf("%d的出现次数：%d，\n", i, b[i]);
  }
  scanf_s("%d", &temp);

}
