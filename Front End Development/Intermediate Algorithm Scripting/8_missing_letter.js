//program to return the missing letter from the sequence alphabetically

function fearNotLetter(str) {
    var start = str.charCodeAt(0);
    for(var i = 1; i < str.length; i++){
        var ascii = str.charCodeAt(i);
        if(ascii !==  start + 1)
            return String.fromCharCode(ascii - 1);
        start++;
    }
    return undefined;
}

console.log(fearNotLetter("bcd"));
