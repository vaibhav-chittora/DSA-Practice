function reverseAstring(str) {
    let arr = str.split('')
    // console.log(arr);
    let i = 0, j = arr.length - 1;
    // let temp;

    while (i <= j) {
       let  temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;
    }
    return arr.join('');
}

str = "hello";
let result = reverseAstring(str);
console.log(result);