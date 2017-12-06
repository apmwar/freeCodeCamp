//create new string that is str repeated num number of times


function repeatStringNumTimes(str, num) {
    var myString = "";
    for(var i = 0; i < num; i++){
        myString += str;
    }
    console.log(myString);
    return myString;
}

repeatStringNumTimes("abc", 3);
