let namaProduk = ["Mouse", "Keyboard", "Monitor", "Headset", "Webcam"];
let ratingProduk = [4.8, 4.2, 3.5, 4.9, 2.8];
let total = 0, s = 0, a = 0, b = 0;

for (let i = 0; i < ratingProduk.length; i++){
    if (ratingProduk[i] >= 4.5){
        console.log(`${namaProduk[i]} Rating ${ratingProduk[i]} : Sangat Bagus`)
        s++;
    } else if (ratingProduk[i] >= 3.5 && ratingProduk[i] < 4.5){
        console.log(`${namaProduk[i]} Rating ${ratingProduk[i]} : Bagus`)
        a++;
    } else {
        console.log(`${namaProduk[i]} Rating ${ratingProduk[i]} : Kurang Bagus`)
        b++;
    }

    total += ratingProduk[i]
}

console.log(`\nJumlah Total Rating Produk ${total}`)
console.log(`Jumlah Rating Sangat Bagus ${s}`)
console.log(`Jumlah Rating Bagus ${a}`)
console.log(`Jumlah Rating Kurang Bagus ${b}`)

let ratarata = total / ratingProduk.length
console.log(`Jumlah Rata-Rata Rating Produk ${ratarata}`)

let max = Math.max(...ratingProduk);
let t = namaProduk.filter((nama, i) => ratingProduk[i] === max)
console.log(`\n${t.join(', ')} Dengan Rating ${max}`)

let min = Math.min(...ratingProduk);
let r = namaProduk.filter((nama, i) => ratingProduk[i] === min)
console.log(`${r.join(', ')} Dengan Rating ${min}`)