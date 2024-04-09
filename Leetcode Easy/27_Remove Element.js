var removeElement = function (nums, val) {

    //started from end
    for (let i = nums.length - 1; i >= 0; i--) {

        //if element is equal;
        if (nums[i] === val) {
            nums.splice(i, 1)
        }

    }

    //how many elements means --> length
    return nums.length;
};