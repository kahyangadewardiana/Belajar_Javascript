const prompt = require ("prompt-sync") ();
// penggunaan if else untuk menentukan lulus atau tidak lulus
// berdasarkan nilai yang diberikan. Jika nilai lebih besar atau sama dengan 90,
// maka akan mencetak "Kamu Lulus". Jika tidak, maka akan mencetak "Kamu Tidak Lulus".
// let Nilai = 85
// console.log(`Nilai : ${Nilai}`)

// if (Nilai >= 70) {
//     console.log('Kamu Lulus')
// }else {
//     console.log('Kamu Tidak Lulus')
// }


// pengguaan if else untuk sistem lalu lintas
// let warna = prompt('Masukan Warna : ')
// warna = warna.toLowerCase();

// if (warna === "hijau") {
//     console.log('Jalan')
// } else if(warna === "kuning") {
//     console.log("Hati-hati")
// } else if(warna === "merah") {
//     console.log("BERHENTI")
// }   


// penggunaan if & else untuk sistem Penerimaan Beasiswa.
ipk = 3.5
skorToefl = 400

if ((ipk >= 3.7) && (skorToefl >= 400)){
    console.log("Selamat, kamu lolos Beasiswa!")
} else {
    console.log("Maaf, kamu belum memenuhi syarat.")
}