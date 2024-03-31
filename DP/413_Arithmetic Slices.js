
let subArray; // Create a sub array
let dp;
let count // make a count variable

function f(count) {
    let n = subArray.length
    //if length<3
    if (n < 3) return 0;

    // if length =3
    if (n === 3) return 1;

    if (dp[count] !== -1) return dp[count];

    //make count variable
    let Subcount = 0
    for (let i = 0; i < n - 2; i++) {
        //difference between elements
        let d = subArray[i + 1] - subArray[i];
        j = i + 1
        while (j < n - 1 && subArray[j + 1] - subArray[j] === d) {
            Subcount++;
            j++;
        }

    }

    dp[count] = Subcount

    return Subcount
}


var numberOfArithmeticSlices = function (nums) {
    subArray = nums;
    dp = Array(nums.length).fill(-1)
    let count = 0
    return f(count)

};