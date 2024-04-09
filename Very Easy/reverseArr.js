let nums = [5,6,7,8,9,10]
function reverse([]) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo <= hi) {
        let temp = nums[lo];
        nums[lo] = nums[hi];
        nums[hi] = temp;
        lo++;
        hi--;
    }
    console.log(nums);
    
}

reverse(nums);