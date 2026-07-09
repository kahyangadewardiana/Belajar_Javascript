let keranjang = [
    { judul: "Belajar JavaScript", harga: 85000, jumlah: 1 },
    { judul: "Dasar HTML", harga: 60000, jumlah: 2 },
    { judul: "CSS Modern", harga: 75000, jumlah: 1 }
];

function hitungTotalBelanja(keranjang) {
    let total = 0;
    
    for (let i = 0; i < keranjang.length; i++){
        total += keranjang[i].harga * keranjang[i].jumlah;
    }

    if (total >= 200000){
        total = total - (total * 0.15)
    }

    return total;
}

let hasil = hitungTotalBelanja(keranjang)

console.log (`Jumalah yang harus dibayar : ${hasil}`)