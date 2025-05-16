// 1st Solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const target = 0 - nums[i];
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[j] + nums[k];
      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j - 1]) j++;
        do {
          k--;
        } while (nums[k] === nums[k + 1]);
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};

// ---------------------------------*******************************************-------------------------------

//2nd Solution : far seasy solution and very similar  to two sum
var threeSum = function (nums) {
  let sortedArr = nums.sort((a, b) => a - b);
  let n = sortedArr.length - 1;
  let ans = [];
  for (let c = 0; c < n; c++) {
    if (c === 0 || sortedArr[c] !== sortedArr[c - 1]) {
      let target = -sortedArr[c];
      let i = c + 1,
        j = n;
      while (i < j) {
        if (sortedArr[i] + sortedArr[j] === target) {
          ans.push([sortedArr[i], sortedArr[j], sortedArr[c]]);
          i++;
          j--;
          // skipping duplicated here
          while (i < j && sortedArr[i] === sortedArr[i - 1]) i++;
          while (i < j && sortedArr[j] === sortedArr[j + 1]) j--;
        } else if (sortedArr[i] + sortedArr[j] < target) {
          i++;
        } else {
          j--;
        }
      }
    }
  }

  return ans;
};
