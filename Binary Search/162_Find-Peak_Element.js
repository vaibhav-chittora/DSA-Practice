var findPeakElement = function (nums) {
    if (nums.length === 1) return 0;
    let n = nums.length;
    let lo = 0, hi = n - 1;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        //check leftmost element
        if (mid === 0 && nums[mid] > nums[mid + 1]) return mid;

        // check rightmost element
        else if (mid === n - 1 && nums[mid] > nums[mid - 1]) return mid;

        // some internal elements can be peek;
        else if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return mid;

        else if (mid < n - 1 && nums[mid] < nums[mid + 1]) { //check for increasing curve
            lo = mid + 1;
        }
        else { // check for decreasing curve
            if (nums[mid] < nums[mid + 1]) {
                return mid;
            }
            hi = mid - 1
        }
    }

};