var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    // for (let i = 0; i < m; i++) {
    //     dp[i] = []
    //     for (let j = 0; j < n; j++) {
    //         dp[i][j] = 0
    //     }
    // }


    //First element - Base Case
    if (obstacleGrid[0][0] === 1) return 0;

    //initialize the first element
    obstacleGrid[0][0] = 1

    for (let i = 1; i < m; i++) {
        //first column
        if (obstacleGrid[i][0] === 0) {
            obstacleGrid[i][0] = obstacleGrid[i - 1][0]
        } else {
            obstacleGrid[i][0] = 0
        }
    }
    //first row
    for (let j = 1; j < n; j++) {
        if (obstacleGrid[0][j] === 0) {
            obstacleGrid[0][j] = obstacleGrid[0][j - 1]
        } else {
            obstacleGrid[0][j] = 0
        }

    }

    //checking remaining grid;
    for (let i = 1; i < m; i++) {

        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
            } else {
                obstacleGrid[i][j] = 0
            }
        }
    }

    //return last element
    return obstacleGrid[m - 1][n - 1]
};