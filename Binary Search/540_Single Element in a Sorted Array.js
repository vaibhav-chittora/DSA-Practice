var singleNonDuplicate = function (nums) {
    let n = nums.length;
    let lo = 0; hi = n - 1;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2); // find the mid point of the array
        if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) { // if "mid" is not equal to adjacent elements
            // mid is the only single element in the array so we return it.
            return nums[mid]; 
        }
        else if (mid % 2 == 0) { //if mid is even
            if (nums[mid] === nums[mid + 1]) {
                lo = mid + 2;
            }
            else {
                hi = mid;
            }
        }
        else { //if mid is odd
            if (nums[mid] === nums[mid - 1]) {
                lo = mid + 1;
            } else {
                hi = mid - 1
            }
        }

    }
    return nums[lo]
};