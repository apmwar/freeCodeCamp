//program to check if given string ends in given character sequence or not

function confirmEnding(str, target) {
    var last = str.slice(str.length- target.length);
    return last === target;
}

console.log(confirmEnding("Bastian", "tian"));
