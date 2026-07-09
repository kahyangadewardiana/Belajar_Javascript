let pesanan = [
    { nama: "Nasi Goreng", harga: 20000, jumlah: 2 },
    { nama: "Es Teh", harga: 5000, jumlah: 3 },
    { nama: "Ayam Bakar", harga: 25000, jumlah: 1 }
];

function hitungTotalBayar(pesanan) {
    let total = 0;

    for (let i = 0; i < pesanan.length; i++) {
        total += pesanan[i].harga * pesanan[i].jumlah;
    }

    if (total >= 50000){
        total = total - (total * 0.10);
    }

    return total;
}

let hasilAkhir = hitungTotalBayar(pesanan);

console.log("Total yang harus dibayar ke kasir: Rp " + hasilAkhir);