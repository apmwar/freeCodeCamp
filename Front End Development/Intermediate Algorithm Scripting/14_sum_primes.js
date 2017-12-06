//program to sum up all prime numbers upto given number

function sumPrimes(num) {
    function isPrime(num){
        for(var i = 2; i <= Math.sqrt(num); i++){
            if(num % i == 0)
                return false;
        }
        return true
    }

    var sum = 0;
    for(var i = 2; i <= num; i++){
        if(isPrime(i))
            sum += i;
    }
    console.log(sum);
    return sum;
}

sumPrimes(977);
