//3rd Solution (Most Optimal Solution) -

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let n = nums.length;
    let result = Array(n); //creating an empty array of length n;

    /**
     * we take 3 variable left, right, and i such that - 
       - left will iterate on extreme left of nums array , 
        - right will iterate on extreme right of nums array
            and 'i' will iterate on the extreme right of the resulant array
     * 
     */
    let left = 0; //extreme left on nums array
    let right = n - 1; //extreme right on nums array

    for (let i = n - 1; i >= 0; i--) { //i.e. why we started our iteration from n-1

        if (nums[left] ** 2 > nums[right] ** 2) { //comparing squares on both the ends
            result[i] = nums[left] ** 2; // storing the value to the reaultant array
            left++;
        }
        else {
            result[i] = nums[right] ** 2
            right--
        }

    }
    return result
};




// 1st Solution : 

var sortedSquares = function (nums) {
    let n = nums.length;
    let resultant = []; // takes an extra array to store elemments
    for (let i = 0; i < n; i++) {
        resultant.push(nums[i] ** 2); //pushing the elements to the resultant array.
    }

    resultant.sort((a, b) => a - b); //sort the resultant array
    return resultant;
};


//2nd Solution - we will not take the extra array instead modify the given nums array and sort it.


var sortedSquares = function (nums) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] ** 2; // we are taking square of each numbers at nums[i]
    }

    nums.sort((a, b) => a - b); // sorting the nums array 
    return nums;
};


