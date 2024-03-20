// 1st Solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=> a-b);
    const result =[];
    for (let i=0;i<nums.length-2;i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        const target = 0-nums[i];
        let j = i+1;
        let k = nums.length-1;
        while(j<k){
            const sum = nums[j]+nums[k];
            if(sum === target){
                result.push([nums[i], nums[j], nums[k]]);
            while(nums[j] === nums[j-1]) j++ ;
               do{
                   k--
               }
               while(nums[k]=== nums[k+1]);
            }
            else if(sum<target) {
            j++;
            }
            else{
            k--
        } 
        }
    }
    return result;
};



//2nd Solution : 

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//     nums.sort((a,b)=> a-b);
//     let n=nums.length;
//     const resultant = [];
//     for(let i=0;i<n-2;i++){
//         if(i>0 && nums[i]===nums[i-1]) continue;
//         const target = 0 - nums[i]
//         let j = i+1;
//         let k=n-1;
//         while(j<k){
//         const sum = nums[j]+nums[k];
//         if(sum<target){
//             j++;
//         }
//         else if(sum>target){
//             k--
//         }
//         else{
//             resultant.push([nums[i], nums[j], nums[k]]);
//             // while(nums[j]===nums[j-1]) j++; // we have to move either j or k
//             do{
//                 k--
//             }
//             while(nums[k] === nums[k+1]){
//             }
//         }
//         }
//     }
//     return resultant
// };