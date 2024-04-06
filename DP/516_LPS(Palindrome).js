let dp = [];
function f(s1, i, j) {
    //if string is of same length
    if (i == j) return 1;
    //
    if (i > j) return 0;

    if (dp[i][j] != -1) return dp[i][j];  //we check 

    //if element at i & j are same
    if (s1[i] === s1[j]) {
        return dp[i][j] = 2 + f(s1, i + 1, j - 1);
    } else {
        //maximum of both
        return dp[i][j] = Math.max(f(s1, i + 1, j), f(s1, i, j - 1))
    }
}

var longestPalindromeSubseq = function (s) {
    for (let i = 0; i < 1005; i++) {
        dp[i] = []
        for (let j = 0; j < 1005; j++) {
            dp[i][j] = -1
        }
    }
    return f(s, 0, s.length - 1);
};