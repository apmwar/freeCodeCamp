//function to cut down an array by choosing elements after howMany

function slasher(arr, howMany) {
    var myArr = arr.slice(howMany);
    console.log(myArr);
    return myArr;
}

slasher([1, 2, 3], 2);
