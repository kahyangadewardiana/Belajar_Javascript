// let identitas = {
//     nama : 'Ade Wardiana',
//     umur : 17,
//     pekerjaan : 'Back-End Developer'
// }

// console.log(`Hallo, Nama Saya ${identitas.nama}, Pekerjaan Saya ${identitas.pekerjaan}`)
// identitas.alamat = 'Bandung';
// console.log(`Alamat ${identitas.alamat}`)


// let product = {
//     name : 'Tas',
//     harga : 50000,
//     stok : 10,
// }

// if (product.stok > 0) {
//     console.log(`Silahkan Beli ${product.name}, Seharga ${product.harga}`);
// } else {
//     console.log(`Product ${product.name} Sedang kosong`);
// }



let gudang = [
    { nama: "Laptop", harga: 15000000, stok: 5 },
    { nama: "Mouse", harga: 200000, stok: 0 },
    { nama: "Monitor", harga: 3000000, stok: 2 }
];

let total = 0;

for (let i = 0; i < gudang.length; i++){
    if (gudang[i].stok > 0){
        console.log(`Barang : ${gudang[i].nama}, Harga : ${gudang[i].harga} Status : Tersedia`)
    } else {
        console.log(`Barang : ${gudang[i].nama}, Harga : ${gudang[i].harga} Status : Habis`)
    }

    total += gudang[i].harga * gudang[i].stok;
}

console.log(`\nTotal : ${total}`)