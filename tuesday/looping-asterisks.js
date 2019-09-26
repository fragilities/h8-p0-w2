// Hacktiv8 phase 0 week 2
// Tugas hari Rabu: Perulangan - Play with Asterisks
// Zoe Zachary

// 1. Menyusun Barisan Bintang

var rows1 = 5;

for(var i = 0; i < rows1; i++) {
  console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;
var temp = '';
for (var i = 0; i < rows2; i++) {
  for(var j = 0; j < rows2; j++) temp = temp + '*';
  console.log(temp);
  temp = '';
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;
var temp = '';

for(var i = 0; i < rows3; i++) {
  for(var j = 0; j <= i; j++) temp = temp + '*';
  console.log(temp);
  temp = '';
}