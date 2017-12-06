//program to calculate sum of the range of numbers. the two arguments passed
//may either be the higher range value or lower

function sumAll(arr) {
    var low, high, sum = 0;
    if(arr[0] < arr[1])
        low = arr[0], high = arr[1];
    else
        low = arr[1], high = arr[0];
    for(var i = low; i <= high; i++)
        sum += i;
    //console.log(sum);
    return sum;
}

sumAll([10, 5]);
