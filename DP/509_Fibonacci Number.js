let dp;
function f(i) {
    //base case
    if (i == 0 || i == 1) return i;

    //if it is already calculated
    if (dp[i] != -1) return dp[i];

    //if not
    return dp[i] = f(i - 1) + f(i - 2);

}


var fib = function (n) {

    dp = Array(10000).fill(-1);
    return f(n)

};
