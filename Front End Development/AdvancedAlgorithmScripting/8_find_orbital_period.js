var Obj = function(name) {
  this.name = name
}


function orbitalPeriod(arr) {
    console.log(typeof arr);
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var myObj = [];
    for(var i = 0; i < arr.length; i++){
        var record = new Obj(arr[i].name);
        myObj.push(record);
    }
    console.log(myObj);
    return myObj;
}
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
