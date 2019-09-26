// Hacktiv8 phase 0 week 2
// Tugas hari selasa: Berlatih Perulangan di JavaScript
// Zoe Zachary

//1. Melakukan Looping Menggunakan While

var forwardCount = 2;
var backwardCount = 20;

console.log('LOOPING PERTAMA');
while(forwardCount <= 20) {
  console.log(forwardCount + ' - I love coding');
  forwardCount += 2;
}

console.log('LOOPING KEDUA');
while(backwardCount >= 2) {
  console.log(backwardCount + ' - I will become fullstack developer');
  backwardCount -= 2;
}

// 2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA');
for(var i = 1; i <= 20; i++) {
  console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA');
for(var i = 20; i >= 1; i--) {
  console.log(i + ' - I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap

for(var i = 1; i <= 100; i++) {
  if(i%2 != 0) console.log('GANJIL');
  else console.log('GENAP');
}

var increament = 2;
for(var i = 1; i <= 100; i += increament) {
  if(i%3 == 0) console.log(i + ' kelipatan 3');
}

increament = 5;
for(var i = 1; i <= 100; i += increament) {
  if(i%6 == 0) console.log(i + ' kelipatan 6');
}

increament = 9;
for(var i = 1; i <= 100; i += increament) {
  if(i%10 == 0) console.log(i + ' kelipatan 10');
}
