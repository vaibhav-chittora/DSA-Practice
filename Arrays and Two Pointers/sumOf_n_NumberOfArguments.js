function addNumbers() {
  let sum = 0;
  // arguments is an array-like object which is available in all functions and contains the values of all arguments passed to that function.
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const result = addNumbers(1, 2, 3, 4, 5);
console.log(result);

const result2 = addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result2);
