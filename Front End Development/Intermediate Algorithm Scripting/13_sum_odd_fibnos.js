//program to calculate the sum of all odd fib nos upto given no

function sumFibs(num) {
    var sum = 1;
    var a = 0, b = 1, c = 1;
    while(c <= num) {
        if(c % 2 != 0)
            sum += c;
        a = b;
        b = c;
        c = a + b;
    }
    console.log(sum);
    return sum;
}

sumFibs(4000000);
