var intersection = function (nums1, nums2) {
    // create a Set from nums1 Array
    let myset = new Set(nums1);
    // create an empty set to store duplicate values
    let result = new Set()
    //check every element of nums2 with nums1
    for (let num of nums2) {
        //if the value is same 
        if (myset.has(num)) {
            // store it in result set
            result.add(num)
        }
    }
    // return an array from result set
    return Array.from(result);
};