//program to remove mentioned values from array

function destroyer(arr, a, b, c) {
    var filtered = arr.filter(function check(value){
        if(c)
            return value != a && value != b && value != c;
        else
            return value != a && value != b;
    });
    console.log(filtered);
    return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
