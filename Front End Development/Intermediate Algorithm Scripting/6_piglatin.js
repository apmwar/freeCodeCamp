//program to convert string to piglatin
//rules are push consonant letters to end appended with "ay"
//if first letter is vowel then simply add "way"

function isVowel(value){
    switch(value){
        case 97:
        case 101:
        case 105:
        case 111:
        case 117:
            return true;
    }
    return false;
}

function translatePigLatin(str) {
    if(isVowel(str.charCodeAt(0)))
        str += "way";
    else{
        var char = "";
        while(!isVowel(str.charCodeAt(0))){
            //console.log(char,str);
            char += str.charAt(0);
            str = str.slice(1);
        }
        str += char + "ay";
    }
    console.log(str);
    return str;
}

translatePigLatin("california");
