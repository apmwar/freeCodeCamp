//program to make every first letter of new word capital
function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function titleCase(str) {
    var words = str.split(" ");
    var myArr = [];
    for(var i = 0; i < words.length; i++){
        myArr.push(capitalise(words[i]));
    }
    str = myArr.join(" ");
    return str;
}

console.log(titleCase("I'm a little tea pot"));
