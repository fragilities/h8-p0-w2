// Hacktiv8 phase 0 week 2
// Tugas hari Jumat: Konversi Menit
// Zoe Zachary

function konversiMenit(menit) {
  // you can only write your code here!
  var hour = 0;
  var minuteRemainder = 0;

  while(menit >= 60) {
    hour += 1;
    menit -= 60;
  }

  minuteRemainder = menit;

  return hour.toString() + ':' + minuteRemainder.toString();
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00