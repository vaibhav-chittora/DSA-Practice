var search = function (nums, target) {
    let n = nums.length;
    let lo = 0, hi = n - 1;
    if (nums.length === 1) {// if array length is 1
        if (nums[0] === target) {
            return 0;
        }
        else {
            return -1;
        }
    }
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (nums[mid] === target) return mid;

        if (nums[mid] >= nums[lo]) { 
            //check whether its ia a pivot between lo and mid
            if (target >= nums[lo] && target < nums[mid]) {
                hi = mid - 1
            }
            else {
                lo = mid + 1
            }
        }
        else {
            // again check for pivot with hi value between mid and hi
            if (target <= nums[hi] && target > nums[mid]) {
                lo = mid + 1
            } else {
                hi = mid - 1
            }
        }

    }
    return -1
};