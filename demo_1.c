#include <stdio.h>

void main() {
  
  int max = 20;
  int a[max], b[10] = {0}, temp = -1;
  printf("亲，请输入%d个10以内的正整数\n", max);

  for (int i = 0; i < max;) {
    scanf("%d", &temp);
    if (temp > 0 && temp < 10) {
      a[i++] = temp;
      b[temp]++;
      printf("%d/%d", i, max);
    }
    else {
      printf("请重新输入一个10以内的正整数");
    }
  }
  
  for (int i = 0; i < 10; i++) {
    printf("%d的出现次数：%d", i, b[i]);
  }
  getch();

}
