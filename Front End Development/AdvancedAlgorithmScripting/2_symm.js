function sym(args) {
  var myArr = [];
  var no = arguments.length;
  for(var i = 0; i < no; i++){
    arguments[i].sort();
  }
  for(var i = 0; i < no - 1; i++){
    var x = arguments[i];
    var y = arguments[i + 1];
    myArr = [];

    for(var a = 0; a < x.length; a++)
      if(y.indexOf(x[a]) < 0)
        myArr.push(x[a]);

    for(var b = 0; b < y.length; b++)
      if(x.indexOf(y[b]) < 0)
        myArr.push(y[b]);

    arguments[i + 1] = myArr;
  }
  myArr = removeDuplicateUsingFilter(myArr);
  return myArr;
}

function removeDuplicateUsingFilter(arr){
    let unique_array = arr.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return unique_array
}


sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])
