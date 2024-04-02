let arr;
let dp;
function f(i, j) {

    if (dp[i][j] !== -1) return dp[i][j] // if it not evaluated;

    if (i === arr.length - 1 && j === arr[0].length - 1) return arr[i][j] //if it is the last element

    let right, down;

    //right element
    if (j + 1 < arr[0].length) {
        right = Math.min(f(i, j + 1))
    } else {
        right = Number.MAX_SAFE_INTEGER;
    };

    //down element
    if (i + 1 < arr.length) {
        down = Math.min(f(i + 1, j))
    } else {
        down = Number.MAX_SAFE_INTEGER;
    }


    dp[i][j] = arr[i][j] + Math.min(right, down);

    return dp[i][j];
}

var minPathSum = function (grid) {
    arr = grid;
    dp = [210] // dp of length 210 just>200
    for (let i = 0; i < 200; i++) {
        dp[i] = []
        for (let j = 0; j < 200; j++) {
            dp[i][j] = -1
        }

    }

    return f(0, 0)

};