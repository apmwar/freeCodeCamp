//print the string in reverse
function reverseString(str) {
    var rstr = "";
    for(var i = str.length - 1; i >= 0; i--){
        rstr += str[i];
    }
    return rstr;
}

console.log(reverseString("hello"));
