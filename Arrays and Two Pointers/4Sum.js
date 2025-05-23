var fourSum = function (nums, target) {
  //fix two pointers on the first two elements and apply two pointer approach on the rest of the array
  //sort the array to apply two pointer approach
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // to avoid duplicates

    for (let j = i + 1; j < n; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue; // to avoid duplicates

      let k = j + 1;
      let l = n - 1;
      // as first two elements are fixed, we can apply two pointer approach on the rest of the array
      while (k < l) {
        let sum = nums[i] + nums[j] + nums[k] + nums[l]; // sum of the four elements
        if (sum < target) {
          // if sum is less than target, we need to increase the sum
          k++;
        } else if (sum > target) {
          // if sum is greater than target, we need to decrease the sum
          l--;
        } else {
          // if sum is equal to target, we need to push the elements to the answer array
          ans.push([nums[i], nums[j], nums[k], nums[l]]);
          k++;
          l--;
          // to avoid duplicates, we need to skip the elements that are equal to the current element just like i and j
          while (k < l && nums[k] === nums[k - 1]) k++;
          while (k < l && nums[l] === nums[l + 1]) l--;
        }
      }
    }
  }
  return ans;
};
