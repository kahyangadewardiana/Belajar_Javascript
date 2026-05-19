// let hobi = ["Lari", "Voli", "Futsal"]

// console.log(hobi [1])
// hobi [0] = 'Coding'

// console.log(hobi)


// let daftarHarga = [10000, 25000, 15000];
// let Total = daftarHarga [0] + daftarHarga [1] + daftarHarga [2];

// console.log(`Total belanjaan dari 3 barang adalah Rp ${Total}`)



// let stokBarang = [10, 0, 5];
// let namaBarang = ["Buku", "Pena", "Penghapus"];

// // Variabel untuk menghitung total stok
// let totalStok = 0;

// // Perulangan untuk mengecek setiap barang
// for (let i = 0; i < stokBarang.length; i++) {

//   if (stokBarang[i] > 0) {
//     console.log(`Barang ${namaBarang[i]} tersedia (${stokBarang[i]} pcs)`);
//   } else {
//     console.log(`Barang ${namaBarang[i]} HABIS!`);
//   }

//   // Menambahkan stok ke total
//   totalStok += stokBarang[i];
// }

// // Menampilkan total stok
// console.log(`Total seluruh stok barang: ${totalStok} pcs`);


// let nilaiSiswa = [80, 90, 70, 85]
// let total = 0;

// for (let i = 0; i < nilaiSiswa.length; i++){
//   total += nilaiSiswa[i]
// }

// let ratarata = total / nilaiSiswa.length
//   console.log(`nilai rata ratanya ${ratarata}`)

// let kumpulanAngka = [12, 5, 8, 20, 3, 15]

// for (let i = 0; i < kumpulanAngka.length; i++){
//   if (kumpulanAngka[i] > 10)
//     console.log(`Adalah ${kumpulanAngka[i]}`)
// }


let namaSiswa = ["Andi", "Budi", "Caca", "Deni", "Euis"]
let nilaiUjian = [80, 50, 90, 40, 75]
let Total = 0;
let jumlahLulus = 0;

for (let i = 0; i < nilaiUjian.length; i++) {
  if (nilaiUjian[i] >= 60 ){
    console.log(`Nama ${namaSiswa[i]}, Nilainya : ${nilaiUjian[i]}, "Lulus"`)
    jumlahLulus++;
  } else {
    console.log(`Nama ${namaSiswa[i]}, Nilainya : ${nilaiUjian[i]}, "Tidak Lulus"`)
  }

  Total += nilaiUjian[i];
}

console.log(`Jumlah Siswa yang LULUS ${jumlahLulus}`)
let ratarata = Total / nilaiUjian.length
console.log(`Nilai Rata-Rata : ${ratarata}`)