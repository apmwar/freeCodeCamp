//program to replace the given characters with their HTML notation


function HTML(value){
    switch(value){
        case '<':
        return "&lt;";
        case '>':
        return "&gt;";
        case '"':
        return "&quot;";
        case "'":
        return "&apos;";
        case '&':
        return "&amp;";

    }
    return value;
}

function convertHTML(str) {
    var myString = "";
    for(var i = 0; i < str.length; i++)
        myString += HTML(str[i]);
    console.log(myString);
    return myString;
}

convertHTML('Stuff in "quotation marks"');
