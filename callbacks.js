//Make the following function calls work
  giveItName("Landon", function(name){
    alert('Your name is ' + name);
  });

  var giveItName = function(name, cb) {
    cb(name);
  }


  var nums = [2,4,5,6];
  //returns true if all items in the array are evens.
  areEvens(nums, function(item){
    return item % 2 === 0;
      console.log(item);
  });

var areEvens = function(arr, cb) {
    cb(nums);
}