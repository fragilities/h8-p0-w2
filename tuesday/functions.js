// Hacktiv8 phase 0 week 2
// Tugas hari Kamis: Berlatih Penggunaan Functions
// Zoe Zachary

// 1. shoutOut function

function shoutOut() {
  return "Halo function!";
}

console.log(shoutOut);

// 2. calculateMultiply function

function calculateMultiply(num1, num2) {
  return num1*num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// processSentence function

function processSentence(name, age, address, hobby) {
  return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!';
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);