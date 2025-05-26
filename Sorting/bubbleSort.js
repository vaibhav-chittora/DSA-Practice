function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let isSwapped = false; // it is for optimization
    for (let j = 0; j < n - i; j++) {
      //because in every iteration we are pushing the element at the last so no need to compare the last element
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (isSwapped === false) return; //return from the function as array is now sorted
  }
}

const arr = [-3, 20, 0, 45, 8, -30, 100];
bubbleSort(arr);
console.log(arr);
