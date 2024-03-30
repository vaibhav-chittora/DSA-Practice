
let matrix; //take a 2d-Array;
let dp; // initialize dp[]

function f(row, col) {

    //if row = last row -> we return tha value at lat row;
    if (row === matrix.length - 1) return matrix[row][col];

    //if value is already calculated, we simply reture the value
    if (dp[row][col] != -1) return dp[row][col]

    //otherwise calculate the min. value at each row&col
    return dp[row][col] = matrix[row][col] + Math.min(f(row + 1, col), f(row + 1, col + 1))
}


var minimumTotal = function (triangle) {
    matrix = triangle;
    //dp[] of length just greater than given length
    dp = [205];
    //row&col can be max 200
    for (let row = 0; row < 200; row++) {
        dp[row] = []
        for (let col = 0; col < 200; col++) {
            //fill each value with -1
            dp[row][col] = -1
        }
    }
    //return the function f() from 0th-row, 0th-col
    return f(0, 0)

};