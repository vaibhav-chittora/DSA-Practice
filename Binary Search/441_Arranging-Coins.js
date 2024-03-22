var arrangeCoins = function (n) {
    let lo = 1; hi = n; //search space would be between [1-n]
    let ans;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2)
        //total coind=s required to make mid no. of rows
        totalCoins = Math.floor(mid * (mid + 1) / 2);
        //if totalcoins are less than n then
        if (totalCoins <= n) {
            ans = mid;
            lo = mid + 1
        }
        else {
            hi = mid - 1
        }
    }
    //at last we return ans;
    return ans
};