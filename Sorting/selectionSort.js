function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minEle = findMinimumElement(arr, i);
    if (minEle !== i) {
      let temp = arr[i];
      arr[i] = arr[minEle];
      arr[minEle] = temp;
    }
  }
}
function findMinimumElement(arr, i) {
  let minEleIndex = i;
  for (j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minEleIndex]) {
      minEleIndex = j;
    }
  }
  return minEleIndex;
}

const arr = [10, -4, -54, -45, 3, 8, 83];
selectionSort(arr);
console.log("Sorted arr", arr);
