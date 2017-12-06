//program to compare 2 strings and print if second string subset of first

function mutation(arr) {
    var str = arr[0].toLowerCase(); //string
    var sub = arr[1].toLowerCase(); //sub-string
    for(var i = 0; i < sub.length; i++){
        if(str.indexOf(sub[i]) == -1)
            return false;
    }
    return true;
}

console.log(mutation(["hello", "Hello"]));
