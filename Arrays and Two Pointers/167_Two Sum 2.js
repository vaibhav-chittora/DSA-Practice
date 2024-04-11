var twoSum = function (numbers, target) {
    //Solving using two pointers;

    let lo = 0; hi = numbers.length - 1;
    let result = []; //new array
    while (lo <= hi) {
        if (numbers[lo] + numbers[hi] === target) {
            //add 1 to make it 1 indexed
            result.push(lo + 1, hi + 1)
            return result;
        }
        else if (numbers[lo] + numbers[hi] < target) {
            lo++
        }
        else {
            hi--
        }
    }
    return result;
};