//program to find the elements that are different from both arrays

function diffArray(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    var diff = [];
    for(var i = 0; i < newArr.length; i++){
        if(arr1.indexOf(newArr[i]) == -1 || arr2.indexOf(newArr[i]) == -1)
            diff.push(newArr[i]);
    }
    console.log(diff);
    return diff;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
