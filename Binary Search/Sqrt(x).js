
var mySqrt = function (x) {
    let lo = 1; hi = x;
    if (x == 0 || x == 1) return x; // returns x if x is 0 or 1;
    let ans; //take the ans variable to store the sqrt value
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        let sqrt = Math.floor(mid**(1/2));
        if(sqrt<=mid){
            lo=mid+1;
            ans=sqrt;
        }
        else{
            hi=mid-1;
        }

    }
    return ans;
};