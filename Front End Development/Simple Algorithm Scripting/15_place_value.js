//function to find which index to place value in after sorting array


function getIndexToIns(arr, num) {
    arr.sort(function(a, b){ //needed because 20 gets sorted before 3
        return a-b           //as array stored as string not numbers
    });
    for(var i = 0; i < arr.length; i++)
        if(arr[i] >= num)
            return i;
    return arr.length;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));
