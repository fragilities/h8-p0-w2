// Hacktiv8 phase 0 week 2
// Tugas hari selasa: Menggunakan Switch-Case
// Zoe Zachary

var tanggal = 3
var bulan = 11
var tahun = 2020

var validitasTanggal = true;
var validitasBulan = true;
var validitasTahun = true;

switch(true) {
  case (tanggal < 1 || tanggal > 31):
    console.log('Tanggal invalid');
    validitasTanggal = false;
}

switch(bulan) {
  case 1:
    bulan = 'januari';
    break;
  case 2:
    bulan = 'februari';
    break;
  case 3:
    bulan = 'maret';
    break;
  case 4:
    bulan = 'april';
    break;
  case 5:
    bulan = 'mei';
    break;
  case 6:
    bulan = 'juni';
    break;
  case 7:
    bulan = 'juli';
    break;
  case 8:
    bulan = 'agustus';
    break;
  case 9:
    bulan = 'september';
    break;
  case 10:
    bulan = 'oktober';
    break;
  case 11:
    bulan = 'november';
    break;
  case 12:
    bulan = 'desember';
    break;
  default:
    console.log('Bulan invalid');
    validitasBulan = false;
}

switch(true) {
  case (tahun < 1900 || tahun > 2200):
    console.log('Tahun invalid');
    validitasTahun = false;
}

switch(validitasTanggal && validitasBulan && validitasTahun) {
  case true:
    bulan = bulan.charAt(0).toUpperCase() + bulan.slice(1);
    console.log(tanggal + ' ' + bulan + ' ' + tahun);
    break;
  case false:
    console.log('ada input yang salah');
}