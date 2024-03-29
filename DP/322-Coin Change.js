let c;//global Coins array
let dp; //global dp array

function f(amount) {
    if (amount < 0) return Number.MAX_SAFE_INTEGER; //if amount is less tha 0 , its not possible

    if (amount === 0) return 0; //if amt=0 -> give nothing;

    if (dp[amount] != -1) return dp[amount];

    let ans = Number.MAX_SAFE_INTEGER; //make ans infinity i.e not possible instead of -1
    let n = c.length
    for (let i = 0; i < n; i++) { // i->[0,n-1]
        if (amount >= c[i]) {
            //ans will be Min of ans & f(amount - c[i])
            ans = Math.min(ans, f(amount - c[i]))
        }
    }

    //if ans is still the maxValue -> we return -1
    if (ans === Number.MAX_SAFE_INTEGER) {
        return dp[amount] = Number.MAX_SAFE_INTEGER
    }

    return dp[amount] = 1 + ans;
}


var coinChange = function (coins, amount) {
    c = coins;
    dp = new Array(10005)
    //fill dp array with -1
    dp.fill(-1)
    let ans = f(amount);
    //if and is still infinity -> return -1 OR return ans;
    return (ans === Number.MAX_SAFE_INTEGER) ? -1 : ans;
};