//program to find the first number in given list of numbers that passes the test function

function findElement(arr, func) {
    for(var i = 0; i < arr.length; i++)
        if(func(arr[i]))
            return arr[i];
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
