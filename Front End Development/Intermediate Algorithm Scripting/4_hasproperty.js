//program to check for specific object properties


function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var check = Object.keys(source);
    //console.log(check);
    //console.log(collection[2].hasOwnProperty(check));
    //console.log(source[check]);

    for(var i = 0; i < collection.length; i++){
        var bool = true;
        if(check.length === 1){
            if(source[check] !== collection[i][check])
                bool = false;
        }

        for(var j = 0; j < check.length; j++){

            if(!collection[i].hasOwnProperty(check[j])){
                bool = false;
            }
        }
        if(bool == true)
            arr.push(collection[i]);
    }
    console.log(arr);
    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
