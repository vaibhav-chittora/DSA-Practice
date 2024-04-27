var firstUniqChar = function (s) {
    //frequency map for storing character count
    const mp = new Map();

    //iterate over s and add values into mp
    for (let char of s) {

        //current freq.
        let currentFreq = mp.get(char)

        if (currentFreq === undefined) { //if not a single character is there ,we store with 1
            mp.set(char, 1)
        } else { //if already char is there, we add 1 in current freq.
            mp.set(char, currentFreq + 1)
        }
    }

    //checking all the elements of string in map
    for (let i = 0; i < s.length; i++) {
        if (mp.get(s[i]) === 1) { //anyone with freq=1
            return i;  //we return it
        }

    }
    //if no unique character we return -1
    return -1;
}  