
let dp;
let arr;

function fbu() {
    let n = arr.length
    //dp array of length n
    let dp = Array(n)
    //fill dp with empty objects
    for (let i = 0; i < dp.length; i++) {
        dp[i] = {};
    }

    let ans = 0
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {

            //diff. b/w current and previous value
            let diff = arr[i] - arr[j]

            //if value exists
            if (dp[j][diff]) {

                // we store in ans
                ans += dp[j][diff];

                if (dp[i][diff]) {
                    dp[i][diff] += 1 + dp[j][diff]
                } else {
                    dp[i][diff] = 1 + dp[j][diff]

                }
            }
            else { // if it does not exist we storw it with 1;

                if (dp[i][diff]) {
                    dp[i][diff] += 1

                } else {
                    dp[i][diff] = 1
                }
            }
        }
    }

    // console.log(dp)
    return ans;
}

var numberOfArithmeticSlices = function (nums) {
    arr = nums;
    return fbu()
};