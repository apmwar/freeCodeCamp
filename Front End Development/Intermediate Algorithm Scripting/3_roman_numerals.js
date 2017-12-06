//program to calculate number into roman numerals

function convertToRoman(num) {
    var roman = "";
    switch(num % 10){
        case 1:
        roman = "I";
        break;
        case 2:
        roman = "II";
        break;
        case 3:
        roman = "III";
        break;
        case 4:
        roman = "IV";
        break;
        case 5:
        roman = "V";
        break;
        case 6:
        roman = "VI";
        break;
        case 7:
        roman = "VII";
        break;
        case 8:
        roman = "VIII";
        break;
        case 9:
        roman = "IX";
        break;
    }
    switch(Math.floor((num % 100) / 10)){
        case 1:
        roman = "X" + roman;
        break;
        case 2:
        roman = "XX" + roman;
        break;
        case 3:
        roman = "XXX" + roman;
        break;
        case 4:
        roman = "XL" + roman;
        break;
        case 5:
        roman = "L" + roman;
        break;
        case 6:
        roman = "LX" + roman;
        break;
        case 7:
        roman =  "LXX" + roman;
        break;
        case 8:
        roman =  "LXXX" + roman;
        break;
        case 9:
        roman =  "XC" + roman;
        break;
    }
    switch(Math.floor((num % 1000) / 100)){
        case 1:
        roman = "C" + roman;
        break;
        case 2:
        roman = "CC" + roman;
        break;
        case 3:
        roman = "CCC" + roman;
        break;
        case 4:
        roman = "CD" + roman;
        break;
        case 5:
        roman = "D" + roman;
        break;
        case 6:
        roman = "DC" + roman;
        break;
        case 7:
        roman =  "DCC" + roman;
        break;
        case 8:
        roman =  "DCCC" + roman;
        break;
        case 9:
        roman =  "CM" + roman;
        break;
    }
    switch(Math.floor(num / 1000)){
        case 1:
        roman = "M" + roman;
        break;
        case 2:
        roman = "MM" + roman;
        break;
        case 3:
        roman = "MMM" + roman;
        break;
    }
    console.log(roman);
    return roman;
}

convertToRoman(29);
