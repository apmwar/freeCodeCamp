//find the length of longest word in given string

function findLongestWord(str) {
    var long = 0, len = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] === " "){
            if(len > long){
                long = len;
            }
            len = 0;
        }
        else
            len++;
    }
    if(len > long)
        return len;
  return long;
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
