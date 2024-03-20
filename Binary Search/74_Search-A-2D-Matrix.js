var searchMatrix = function (matrix, target) {

    let m = matrix.length; //no. of rows
    let n = matrix[0].length; //no. of col.

    let lo = 0, hi = m * n - 1; // search space 

    while (lo <= hi) {

        let mid = lo + Math.floor((hi - lo) / 2)

        let row = Math.floor(mid / n); // calculate no. rows
        let col = mid % n; //calculate no of columns

        if (matrix[row][col] === target) { //if Value at particular index = target
            return true;
        } else if (matrix[row][col] < target) {
            lo = mid + 1
        } else {
            hi = mid - 1
        }

    }
    return false;
};