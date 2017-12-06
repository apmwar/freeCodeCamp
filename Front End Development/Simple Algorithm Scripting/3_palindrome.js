//print if input string is palindrome or not

function palindrome(str) {

    str = str.toLowerCase();
    var alphanum = /^[0-9a-zA-Z]+$/;
    var len = str.length;
    var i = 0, j = len - 1;
    while(j > i){
        if(str[i].match(alphanum)){
            if(str[j].match(alphanum)){
                if(str[i] === str[j]){
                    i++;
                    j--;
                }
                else {
                    return false;
                }
            }
            else{j--;}
        }
        else{i++;}
    }
    return true;
}



console.log(palindrome("My age is 0, 0 si ega ym."));
