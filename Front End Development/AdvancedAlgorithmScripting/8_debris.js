function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var myarr = [];
  for(var i = 0; i < arr.length; i++){
    var temp = Math.sqrt((Math.pow(earthRadius + arr[i]["avgAlt"], 3))/GM) * 2 * Math.PI;
    temp = Math.round(temp);
    var prop = "avgAlt";
    delete arr[i][prop];
    prop = "orbitalPeriod";
    arr[i][prop] = temp;
  }
  console.log(arr)
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
