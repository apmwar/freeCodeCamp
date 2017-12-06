//program to remove false, 0, undefined, null, or NaN values

function isValid(value) {
    if(value == false || value == 0 || value === "" || value == undefined || value == null)
        return false;

    else if(value !== value)
        return false;

    return true;
}

function bouncer(arr) {
    var myArr = arr.filter(isValid);
    console.log(myArr);
    return myArr;
}

bouncer([false, null, 0, NaN, undefined, ""])
