//program to find the least common multiple of given range of numbers

function smallestCommons(arr) {

    function GCD(a, b){
        while(a != b){
            if(a > b)
                a = a - b;
            else
                b = b - a;
        }
        return a;
    }
    arr.sort();
    var low = arr[0], high = arr[1], lcm = 1;

    for(var i = low; i <= high; i++)
        lcm = (lcm * i) / GCD(lcm, i);

    //console.log(lcm);
    return lcm;
}

smallestCommons([23,18]);
