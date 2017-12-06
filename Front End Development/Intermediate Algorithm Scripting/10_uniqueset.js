//program to make the input array as one unique array with only distinct values

function uniteUnique(arr) {
    var myArr = [];
    for(var i = 0; i < arguments.length; i++){
        for(var j = 0; j < arguments[i].length; j++){
            if(myArr.indexOf(arguments[i][j]) == -1)
                myArr.push(arguments[i][j]);
        }
    }
    console.log(myArr);
    return myArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
