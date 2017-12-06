//program to delete all the elements of given array until function turns true for any element

function dropElements(arr, func) {
    for(var i = 0; i < arr.length; i++){
        if(func(arr[i])){
            arr = arr.slice(i);
            console.log(arr);
            return arr;
        }
    }
    arr = []; //no element satisfies function
    console.log(arr);
    return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;})
