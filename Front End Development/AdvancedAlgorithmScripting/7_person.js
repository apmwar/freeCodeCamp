var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };

    this.getFirstName = function() {
      var name = firstAndLast.split(" ");
      return name[0];
    };

    this.getLastName = function() {
      var name = firstAndLast.split(" ");
      return name[1];
    };

    this.setFullName = function(name) {
      firstAndLast = name;
    };

  this.setFirstName = function(fname) {
      var newname = "";
      var temp = firstAndLast.split(" ");
      var x = "";
      x = temp[1];
      newname = fname + " " + x;

      firstAndLast = newname;
    };

  this.setLastName = function(lname) {
      var newname = "";
      var temp = firstAndLast.split(" ");
      var x = "";
      x = temp[0];
      newname = x + " " + lname;
      firstAndLast = newname;
    };

    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
