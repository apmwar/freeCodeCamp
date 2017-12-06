//program to implement caesar's cipher. decode each character by shifting 13 places
//all are capital letters


function rot13(str) { // LBH QVQ VG!
    var cstring = "";
    for(var i = 0; i < str.length; i++){
        var n = str.charCodeAt(i);
        if(n >= 65 && n <= 91){
            if(n < 78){ n += 13; }
            else{ n = 65 + (13 - 91 + n); }
            cstring += String.fromCharCode(n);
        }
        else
            cstring += str[i];
    }
    //console.log(cstring);
    return cstring;
}

rot13("SERR CVMMN!");
