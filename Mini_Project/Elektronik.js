let produk = [
    { nama: "Laptop", harga: 12000000, stok: 4 },
    { nama: "Mouse", harga: 150000, stok: 10 },
    { nama: "Keyboard", harga: 300000, stok: 0 },
    { nama: "Monitor", harga: 2500000, stok: 3 },
    { nama: "Headset", harga: 500000, stok: 7 }
];

let total = 0, stok = 0;
let jumlahBarangHabis = 0;
let stokTerbanyak = produk[0];
let barangTermahal = produk[0];
let habis = [0];

for (let i = 0; i < produk.length; i++) {

    let statusStok;
    let statusHarga;

    if (produk[i].stok > 0) {
        statusStok = "Tersedia";
    } else {
        statusStok = "Habis";
        jumlahBarangHabis++;
    }

    if (produk[i].harga > 1000000) {
        statusHarga = "Mahal";
    } else {
        statusHarga = "Murah";
    }

    console.log(
        `${produk[i].nama} | Stok: ${produk[i].stok} | ${statusStok} | Harga: ${produk[i].harga} | ${statusHarga}`
    );

    total += produk[i].harga * produk[i].stok;

    if (produk[i].stok > stokTerbanyak.stok) {
        stokTerbanyak = produk[i];
    }

    if (produk[i].harga > barangTermahal.harga){
        barangTermahal = produk[i]
    }
}

console.log(`\nTotal Nilai Barang: ${total}`);

console.log(
    `Barang dengan stok terbanyak: ${stokTerbanyak.nama} (${stokTerbanyak.stok})`
);

let ratarata = total / produk.length;
console.log(`Jumlah harga rata-rata barang ${ratarata}`)
console.log(`Barang Dengan Harga Termahal ${barangTermahal.nama}`)
console.log(`Jumlah jenis barang yang habis: ${jumlahBarangHabis}`);