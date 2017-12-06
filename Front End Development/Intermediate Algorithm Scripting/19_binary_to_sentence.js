//program to convert the given string of binary numbers into sentence

function binaryAgent(str) {
    var arr = str.split(" ");
    var sentence = "";
    arr.forEach(function(element){
        function binary(value){
            var binvalue = 0;
            for(var i = value.length - 1; i >= 0 ; i--)
                binvalue += value[i] * Math.pow(2, value.length - 1 - i);
            return binvalue;
        }
        sentence += String.fromCharCode(binary(element));
    });

    console.log(sentence);
    return sentence;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
