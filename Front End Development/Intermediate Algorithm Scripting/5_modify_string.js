//program to modify the given string word with another


function myReplace(str, before, after) {
    //if before starts with capital letter then after should also
    if(before.charCodeAt(0) > 64 && before.charCodeAt(0) < 91){
        var char = after.charAt(0).toUpperCase();
        after = after.slice(1);
        after = char + after;
    }
    var myString = str.replace(before, after);
    //console.log(myString);
    return myString;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
