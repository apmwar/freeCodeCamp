//program to accept a multidimensional array and return a vector that has all
//the elements of the original array in it

function steamrollArray(arr) {
    var myArr = [];
    for(var i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i]))
            myArr.push(arr[i]);
        else{
            for(var j = 0; j < arr[i].length; j++){
                var n = arr[i][j];
                while(Array.isArray(n)){
                    n = n[0];
                }
                myArr.push(n);
            }
        }
    }
    console.log(myArr);
    return myArr;
}

steamrollArray([1, [2], [3, [[4]]]])
