//program to display the complimentary DNA pairs


function pairElement(str) {
    var arr = str.split("");
    var myArr = [];
    arr.forEach(function(element){
        var myArrElement = "";
        switch(element){
            case 'G':
            myArrElement = "GC";
            break;
            case 'C':
            myArrElement = "CG";
            break;
            case 'A':
            myArrElement = "AT";
            break;
            case 'T':
            myArrElement = "TA";
            break;
        }
        myArr.push(myArrElement.split(""));
    });
    console.log(myArr);
    return myArr;
}

pairElement("GCG");
