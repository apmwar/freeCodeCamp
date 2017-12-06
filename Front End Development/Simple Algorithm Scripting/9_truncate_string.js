//program to truncate the string


function truncateString(str, num) {
    var myStr= "";
    if(num < str.length){
        if(num > 3)
            num -= 3;
        for(var i = 0; i < num; i++)
            myStr += str[i];
        myStr += "...";
    }
    else {
        myStr = str;
    }
    console.log(myStr);
    return myStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
