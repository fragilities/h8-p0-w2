// Hacktiv8 phase 0 week 2
// Tugas hari Jumat: Bandingkan Angka
// Zoe Zachary

function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
  if(angka1 < angka2) return true;
  else if (angka1 > angka2) return false;
  else return -1;
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false