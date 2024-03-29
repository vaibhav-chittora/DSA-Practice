let perfSq; // create an array of perfect squares
let dp;
function f(n) {  //
    if (n < 0) return Number.MAX_SAFE_INTEGER; //if number is -ve -> not possible so we give infinity

    if (n === 0) return 0; //if number is 0 -> return 0

    if (dp[n] != -1) return dp[n] //if value is not calculated before

    let ans = Number.MAX_SAFE_INTEGER //for not possible values we take numbers as infinity

    for (let i = 0; i < n; i++) {
        // n>=perf square
        if (n >= perfSq[i]) {
            ans = Math.min(ans, f(n - perfSq[i])) //find the minimum of both 
        }
        // perf Square > n -> then break the loop
        else {
            break;
        }

    }
    // if ans is still infinity 
    if (ans === Number.MAX_SAFE_INTEGER) {
        return dp[n] = Number.MAX_SAFE_INTEGER
    }
    return dp[n] = 1 + ans
}

var numSquares = function (n) {
    perfSq = [1000];
    let j = 0
    //store the perfect squares
    for (let i = 1; i * i <= 10000; i++) {
        perfSq[j] = i * i;
        j++
    }
    //fill dp array with -1
    dp = new Array(10005).fill(-1)
    let ans = f(n)
    return ans;

};