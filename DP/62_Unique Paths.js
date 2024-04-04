var uniquePaths = function (m, n) {
    //created a 2D array of m*n grid and fille dwith -1 
    let arr = Array.from(Array(m), () => new Array(n).fill(-1));

    //fill 1 element of col(0) 
    for (let i = 0; i < m; i++) {
        arr[i][0] = 1
    }
    //fill 1 element of row(0) 

    for (let j = 0; j < n; j++) {
        arr[0][j] = 1
    }
    //iterate over the grid
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
        }
    }

    return arr[m - 1][n - 1];
};