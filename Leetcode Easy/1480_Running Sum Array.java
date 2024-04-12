class Solution {
    public int[] runningSum(int[] nums) {
        // initially the sum will be 0
        int sum = 0;
        // result array
        int[] result = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            // sum = sum+nums[i]
            sum += nums[i];
            // push sum in result
            result[i] = sum;
        }
        return result;
    }
}