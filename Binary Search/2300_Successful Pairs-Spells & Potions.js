var successfulPairs = function (spells, potions, success) {
    //sort the array first
    potions.sort((a, b) => a - b)
    //create an empty array
    let pairs = [];
    let n = spells.length, m = potions.length;
    
    for (let i = 0; i < n; i++) {
        //make a counter variable 
        let count = 0;
        let lo = 0, hi = m - 1;
        while (lo <= hi) {
            let mid = lo + Math.floor((hi - lo) / 2);
            if (spells[i] * potions[mid] >= success) {
                hi = mid - 1
            } else {
                lo = mid + 1;
            }
        }
        count = m - lo
        pairs.push(count)
    }
    return pairs;
};