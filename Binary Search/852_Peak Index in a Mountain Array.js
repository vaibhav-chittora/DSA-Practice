var peakIndexInMountainArray = function (nums) {
    n = nums.length;
    let lo = 0, hi = n - 1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        //if mid is greater than adjacent elements
        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return mid;
        
        //to check for inc. or dec. slope
        if (nums[mid] < nums[mid + 1]) { //if it is in inc curve
            lo = mid + 1
        }
        else if (nums[mid] > nums[mid + 1]) { //if dec. curve
                hi = mid
            }
        
    }
    return hi;
};