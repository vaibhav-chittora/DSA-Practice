function isPrime(n) {
    if (n <= 1) {
        console.log("Not Prime");
        return;
    }

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log("Not Prime");
            return
        }

    }
    console.log("Prime");


}

isPrime(9)

