var search = function (nums, target) {
    let n = nums.length;
    let lo = 0, hi = nums - 1;

      if (nums.length === 1) {// if array length is 1
        if (nums[0] === target) {
            return true;
        }
        else {
            return false;
        }
    }
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if ( target === nums[mid]) return true;

        else if (nums[mid] >= nums[lo]) {
            if (target >= nums[lo] && target < nums[mid]) {
                hi = mid - 1;
                // return true;
            } else {
                lo = mid + 1
            }
            // return true;
        }
        else {
            if (target <= nums[hi] && target > nums[mid]) {
                lo = mid + 1
            } else {
                hi = mid - 1
            }
        }
    }
    return false;
};