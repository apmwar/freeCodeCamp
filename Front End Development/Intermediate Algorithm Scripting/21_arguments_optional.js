//program to add together two valid number inputs only

function addTogether(x, y) {
    if(typeof x != "number")
        return undefined;
    if(typeof y == "string")
        return undefined;
    if(arguments.length === 2)
        return x + y;

    return function(y) {
        if(typeof(y) != "number")
            return undefined;
        return x + y;
  };
}

var values = addTogether(2);
console.log(values(3));
