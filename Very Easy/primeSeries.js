function isPrime(n) {
    if (n <= 1) {
        // console.log("Not Prime");
        return false;
    }

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            // console.log("Not Prime");
            return false
        }

    }
    // console.log("Prime");
    return true;


}

let N = 100;
for(let i =1;i<N;i++){
    if(isPrime(i)){
        console.log(i);
    }
}