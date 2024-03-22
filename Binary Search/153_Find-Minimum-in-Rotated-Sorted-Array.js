var findMin = function (nums) {
    let n = nums.length
    let lo = 0, hi = n - 1;

    //if the array is of length 1
    if (n === 1) {
        return nums[0];
    }

    while (lo <= hi) {
        //find mid
        let mid = lo + Math.floor((hi - lo) / 2);
        //if mid is greater then next element
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        // if mid is smaller then next element
        if (nums[mid] < nums[mid - 1]) return nums[mid]

        if (nums[mid] >= nums[lo]) { // check is the array is sorted or not
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }

    }

    //for already sorted arrays we direclt return first element
    return nums[0];
};