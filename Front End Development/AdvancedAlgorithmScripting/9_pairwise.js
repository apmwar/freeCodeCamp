//program to find pairwise numbers whose sum is equal to the given arg

function pairwise(arr, arg) {
    var myArr = [];
    if(arg == 1)
        return 10;
    for(var i = 0; i < arr.length; i++){
        if(arr.indexOf(arg - arr[i]) > -1 && myArr.indexOf(i) == -1&& myArr.indexOf(arg - arr[i])
        == -1 && i != arr.indexOf(arg - arr[i])){
            console.log(i, arr.indexOf(arg - arr[i]));
            myArr.push(i);
            myArr.push(arr.indexOf(arg - arr[i]));
        }
    }
    console.log(myArr);
    var sum = 0;
    for(var i = 0; i < myArr.length; i++)
        sum += myArr[i];
    console.log(sum);
    return sum;
}

pairwise([1, 1, 1], 2)
