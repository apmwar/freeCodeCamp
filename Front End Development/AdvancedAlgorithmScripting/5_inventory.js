
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    if(arr1.length == 0)
      return arr2;
    if(arr2.length == 0)
      return arr1;

    var total = [];


    var i = 0, j = 0, k = 0;

    for(i = 0; i < arr1.length; i++){
      for(j = 0; j < arr2.length; j++){
        if(arr1[i][1] == arr2[j][1]){
          arr1[i][0] += arr2[j][0];
          total[k] = arr1[i];
          arr1[i][0] = -1;
          arr2[j][1] = "";
          k++;
          break;
        }
      }
    }

    console.log(arr1)

    //for(i = 0; i < arr1.length; i++){
      //if(arr1[i][0] != -1){
        //total[k] = arr1[i];
        //k++;
      //}
    //}

    //console.log(total);
    return total;
}

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const genreA = a[1].toUpperCase();
  const genreB = b[1].toUpperCase();

  let comparison = 0;
  if (genreA > genreB) {
    comparison = 1;
  } else if (genreA < genreB) {
    comparison = -1;
  }
  return comparison;
}

var string = "Abcdefg";
console.log(string.slice(3,1))


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
