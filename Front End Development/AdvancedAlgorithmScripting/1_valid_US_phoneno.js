//program to check if given string is an acceptable US phone number format
/*accepted formats are
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555*/

function telephoneCheck(str) {
    var arr = (str.match(/\d+/g)).join("");
    if(arr.length > 11 || arr.length < 10) //more than 1o or 11 numbers
        return false;
    if(arr.length == 11 && arr[0] != 1) //country code digit not 1
        return false;
    if(str[0] == '-') //misplaced -
        return false;
    if((str[0] == '(' && str[4] != ')') || (str[0] != '(' && str[3] == ')'))
        return false;
    var myleft = (str.match(/\(/g));
    var myright = (str.match(/\)/g));
    if(myleft != myright){
        if(myleft == null || myright == null || myleft.length != myright.length)  //odd no of paranthese ()
            return false;
    }
    var notNumber = (str.match(/\D+/g));
    if(notNumber != null){
            notNumber = notNumber.join("");
        for(var i = 0; i < notNumber.length; i++){
            if(notNumber[i] != '(' && notNumber[i] != ')' && notNumber[i] != '-' && notNumber[i] != " ")
                return false;
        }
    }
    return true;
}


console.log(telephoneCheck("1 555-555-5555"));
