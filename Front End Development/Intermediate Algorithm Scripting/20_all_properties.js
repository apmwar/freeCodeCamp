//program to check if all elements of collection have a certain property or not


function truthCheck(collection, prop) {
    var bool = true;
    for(var i = 0; i < collection.length; i++){
        if(collection[i].hasOwnProperty(prop)){
            var x = collection[i][prop];
            switch(x){
                case "":
                case null:
                case 0:
                case undefined:
                    bool = false;
            }
            if(x != x)
                bool = false;
        }
        else{ bool = false; }
    }
    console.log(bool);
    return bool;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
