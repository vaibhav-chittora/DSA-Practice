function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let element = arr[i]; //assuming the first element is already sorted
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > element) {
        arr[j + 1] = arr[j]; //shifting the bigger element to the right.
      } else {
        //arr[j]<=element
        break;
      }
    }
    arr[j + 1] = element;
  }
}

let arr = [-3, 10, -10, 4, 50, 0];
insertionSort(arr);
console.log(arr);
