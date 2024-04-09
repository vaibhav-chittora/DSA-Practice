var removeDuplicates = function (nums) {

    for (let i = nums.length - 1; i >= 0; i--) {
        
        //check adjacent elements
        if (nums[i] === nums[i+1] && nums[i] === nums[i-1]){
            nums.splice(i,1)
        }
    }
    return nums.length

};