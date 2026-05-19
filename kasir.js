let namaBarang = ["Pensil", "Buku", "Penghapus", "Tas", "Pulpen"]
let hargaBarang = [2000, 5000, 1500, 50000, 4000]
let total = 0;
let murah = 0
let mahal = 0;

for (let i = 0; i < hargaBarang.length; i++){
    if (hargaBarang[i] > 4000){
        console.log (`${namaBarang[i]}, Harga Rp ${hargaBarang[i]} = "BARANG MAHAL"`)
        mahal ++;
    } else {
        console.log (`${namaBarang[i]}, Harga Rp ${hargaBarang[i]} = "BARANG MURAH"`)
        murah ++;
    }

    total += hargaBarang[i]
}

console.log('Total Jumlah Belanjaan', total)

if (total > 50000){
        console.log('Anda Mendapatkan Diskon!')
    } else {
        console.log ('Belanja Lagi Untuk Mendpatkan Diskon')
}

console.log (`Jumlah Barang Mahal = ${mahal}`)
console.log (`Jumalha Barang Murah ${murah}`)

let ratarata = total / hargaBarang.length
console.log(`Harga Rata-Rata BarangNya Adalah : ${ratarata}`)