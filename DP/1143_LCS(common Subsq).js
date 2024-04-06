let dp = []//create 2D array

function f(s1, s2, i, j) { // both string --> i & j at both end of s1 and s2;

    //if  both the strings are exhausted
    if (i == -1 || j == -1) return 0;

    // we check if evaluated
    if (dp[i][j] != -1) return dp[i][j];

    //if element is equal
    if (s1[i] == s2[j]) {
        return dp[i][j] = 1 + f(s1, s2, i - 1, j - 1);
    }
    else {
        return dp[i][j] = Math.max(f(s1, s2, i - 1, j), f(s1, s2, i, j - 1))
    }

}
var longestCommonSubsequence = function (text1, text2) {
    //fill dp array with -1's
    for (let i = 0; i < 1005; i++) {
        dp[i] = []
        for (let j = 0; j < 1005; j++) {
            dp[i][j] = -1
        }
    }
    //return f(s1, s2, i, j)
    return f(text1, text2, text1.length - 1, text2.length - 1)
};