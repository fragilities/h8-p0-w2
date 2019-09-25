// Hacktiv8 phase 0 week 2
// Tugas hari selasa: Menggunakan If Else
// Zoe Zachary

function printSelamatDatang(nama) {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
}

function cekValiditasPeran(peran) {
  console.log('Peran yang di cek: ' + peran);

  if(peran == '' || peran == null) return false;

  if(peran.toLowerCase() == 'ksatria' || peran.toLowerCase() == 'tabib' || peran.toLowerCase() == 'penyihir') {
    return true;
  } else return false;
}

var nama = prompt('masukan nama');

while(nama == '' || nama == null) {
  nama = prompt('Nama harus diisi!');
}

var peran = prompt('Halo ' + nama + ', Pilih peranmu untuk memulai game! (Ksatria / Tabib / Penyihir)');

while (!cekValiditasPeran(peran)) {
  peran = prompt('Halo ' + nama + ', Pilih peranmu untuk memulai game! (Ksatria / Tabib / Penyihir)');
}

if(peran == 'ksatria') {
  printSelamatDatang(nama);
  console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (peran == 'tabib') {
  printSelamatDatang(nama);
  console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
} else {
  printSelamatDatang(nama);
  console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}