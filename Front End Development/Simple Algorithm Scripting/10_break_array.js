//program to break array into n chunks and print as 2D array

function chunkArrayInGroups(arr, size) {
    var myArr = [];
    for(var i = 0; i < arr.length; i += size){
        myArr.push(arr.slice(i, i + size));
    }
    console.log(myArr);
    return myArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
