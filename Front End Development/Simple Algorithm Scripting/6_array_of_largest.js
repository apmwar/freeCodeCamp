//program to compute the array containing largest values of a given
//multiD array

function largestOfFour(arr) {
    var myArr = [];
    for(var i = 0; i < 4; i++){
        var max = arr[i][0];
        for(var j = 1; j < 4; j++){
            if(arr[i][j] > max)
                max = arr[i][j];
        }
        myArr.push(max);
    }
    //console.log(myArr);
    return myArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
