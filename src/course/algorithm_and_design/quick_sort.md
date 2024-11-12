---
title: 快速排序
icon: pen-to-square
date: 2024-11-09
category:
  - 课程
tag:
  - 算法与设计
---

## 算法思想

1. 选择基准元素
   - 在待排序的数组中选择一个元素作为基准元素（pivot）。选择的是数组的最后一个元素作为基准元素（`array[r]`）。
2. 分区操作
   - 重新排列数组，使得所有比基准元素小的元素都移动到基准元素的左边，所有比基准元素大或相等的元素都移动到基准元素的右边。这个过程称为分区（partition）操作。
   - 分区操作通过维护两个指针（`left`和`right`）来实现。`left`指针从数组的起始位置（`p-1`）的前一个位置开始向右移动，`right`指针从数组的起始位置开始向右移动。
   - 当`right`指针指向的元素小于或等于基准元素时，将`left`指针向右移动一位，并交换`left`和`right`指针指向的元素。
   - 当`right`指针指向的元素大于基准元素时，继续向右移动`right`指针。
   - 当`right`指针遍历完数组（到达`r-1`位置）后，将基准元素与`left + 1`位置的元素交换，这样基准元素就处于了它的最终位置。
3. 递归排序
   - 递归地对基准元素左侧和右侧的子数组进行排序。
   - 递归调用`quickSort`函数，传入基准元素左侧子数组的起始位置和结束位置（`p`到`q-1`），以及基准元素右侧子数组的起始位置和结束位置（`q+1`到`r`）。

## 代码实现

快速排序

::: code-tabs#code

@tab:active C

```c
#include <stdio.h>


void swap(int array[], int i, int j)
{
    int temp;
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

int partition(int array[], int p, int r)
{
    int x, left, right;
    x = array[r]; // 基准元素
    left = p - 1; // 慢指针

    for(right=p; right < r; right++)
    {
        /* <=i 位置上的数都比 x 小；>i 且<=j 位置上的数都比 x 大 */
        if(array[right] <= x)
        {
            left++;
            swap(array, left, right);
        }
    }
    // 移动基准元素
    swap(array, left + 1, r);

    return left + 1; // 返回基准元素最终下标
}

void quickSort(int array[], int p, int r)
{
    int q=0;
    if(p<r){
        q = partition(array, p, r);
        quickSort(array, p, q-1);
        quickSort(array, q+1, r);
    }

}

int main(void) {
    int arr1[] = {38, 49, 65, 97, 76, 13, 27, 49};
    for (int i = 0; i < 8; ++i) {
        printf("%d ", arr1[i]);
    }
    printf("\n");
    quickSort(arr1, 0, 7);
    for (int i = 0; i < 8; ++i) {
        printf("%d ", arr1[i]);
    }
    return 0;
}
```

:::