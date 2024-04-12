/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function (nums) {
    //Initialy sum will be zero
    let sum = 0;
    //result array
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        //sum = sum+nums[i]
        sum += nums[i];
        //push sum in result
        result.push(sum)

    }
    
    return result;

};