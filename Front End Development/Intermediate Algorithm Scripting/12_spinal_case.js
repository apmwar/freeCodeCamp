//program to convert given string into spinalcase

spinalCase('Teletubbies say_Eh-oh');

function spinalCase(str) {
    function upperToHyphenLower(match, offset, string) {
        //console.log(match, offset, string, string[offset],".");
        return (offset > 0 ? '-' : '') + match.toLowerCase();
    }
    
    function removeSpace(match, offset, string) {
        return (string[offset+1] != "-")? "-" : "";
    }

    str = str.replace(/[A-Z]/g, upperToHyphenLower);
    str = str.replace(/\s/g, removeSpace);
    str = str.replace(/_/g, removeSpace);
    console.log(str);
    return str;
}
