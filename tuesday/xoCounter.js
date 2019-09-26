// Hacktiv8 phase 0 week 2
// Tugas hari Jumat: X dan O
// Zoe Zachary

function xo(str) {
  // you can only write your code here!
  var x_counter = 0;
  var o_counter = 0;

  for(var i = 0; i < str.length; i++) {
    if(str[i] == 'x') x_counter += 1;
    else o_counter += 1;
  }

  return x_counter == o_counter;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true