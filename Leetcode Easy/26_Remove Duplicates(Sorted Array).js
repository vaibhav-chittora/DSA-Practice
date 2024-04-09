var removeDuplicates = function (nums) {

    //iterate over the array 
    for (let i = nums.length - 1; i >= 0; i--) {

        if (nums[i] == nums[i - 1]) { //check adjacent elements
            nums.splice(i, 1)
        }


    }

    //return length of array
    return nums.length;

};