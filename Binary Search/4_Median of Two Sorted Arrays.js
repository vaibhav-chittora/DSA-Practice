var findMedianSortedArrays = function (nums1, nums2) {
    //store in result array
    let resultArray = mergeSortedArrays(nums1, nums2);
    let n = resultArray.length;
    // if the length is odd
    if (n % 2 !== 0) {
        return resultArray[Math.floor(n / 2)];
    }
    //if length is even
    else {
        return (resultArray[(n / 2 - 1)] + resultArray[n / 2]) / 2
    }

};

//function to merge to sorted arrays

function mergeSortedArrays(nums1, nums2) {
    let i = 0, j = 0;

    // create an empty array to store the merged elements
    let mergedArr = [];

    //Both i and j should be less then length of arrays.
    while (i < nums1.length && j < nums2.length) {
        //if nums1 is less
        if (nums1[i] < nums2[j]) {
            mergedArr.push(nums1[i]);
            i++
        } else { //nums2 is less
            mergedArr.push(nums2[j])
            j++
        }
    }
    // if i is less 
    while (i < nums1.length) {
        mergedArr.push(nums1[i])
        i++
    }
    //if j is less
    while (j < nums2.length) {
        mergedArr.push(nums2[j])
        j++
    }

    return mergedArr;
}