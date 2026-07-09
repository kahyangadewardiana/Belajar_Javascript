// let namaKaryawan = ["Andi", "Budi", "Caca", "Deni", "Euis"];
// let gajiKaryawan = [7000000, 4000000, 2500000, 9000000, 5000000];

// const Gaji = gajiKaryawan.map((_, i) => {
//     let umr = '';
//     if (gajiKaryawan[i] >= 7000000) umr = 'Gaji Tinngi';
//     else if (gajiKaryawan[i] >= 4000000 && gajiKaryawan[i] < 7000000) umr = 'Gaji Sedang';
//     else umr = 'Gaji Rendah';

//     console.log(`${namaKaryawan[i]} Gajinya ${gajiKaryawan[i]} || ${umr}`)
//     return umr;
// })

// const total = gajiKaryawan.reduce((a, b) => a + b, 0)

// const s = Gaji.filter(s => s === 'Hayang Aing').length;
// const a = Gaji.filter(s => s === 'Hayang Oge').length;
// const b = Gaji.filter(s => s === 'Bolehlah').length;

// console.log(`Jumlah Gajih Karyawan Tinngi : ${s}`)
// console.log(`Jumlah Gajih Karyawan Sedang : ${a}`)
// console.log(`Jumlah Gajih Karyawan Rendah : ${b}`)
// console.log(`Jumlah Total Pengeluaran Gaji ${total}`)

// let max = Math.max(...gajiKaryawan)
// let tertinggi = namaKaryawan.filter((nama, i) => gajiKaryawan[i] === max)
// console.log(`\nGaji Tertinggi ${tertinggi.join(', ')} dengan gaji ${max}`)

// let min = Math.min(...gajiKaryawan)
// let terendah = namaKaryawan.filter((nama, i) => gajiKaryawan[i] === min)
// console.log(`Gaji Tertinggi ${terendah.join(', ')} dengan gaji ${min}`)


let namaKaryawan = ["Andi", "Budi", "Caca", "Deni", "Euis"];
let gajiKaryawan = [7000000, 4000000, 2500000, 9000000, 5000000];
let total = 0, t = 0, r = 0, s = 0;

for (let i = 0 ; i < gajiKaryawan.length; i++){
    if (gajiKaryawan[i] >= 7000000){
        console.log(`${namaKaryawan[i]} || ${gajiKaryawan[i]} || Gaji Tinggi`)
        t++;
    }else if(gajiKaryawan[i] >= 4000000 && gajiKaryawan[i] < 7000000){
        console.log(`${namaKaryawan[i]} || ${gajiKaryawan[i]} || Gaji Sedang`)
        s++;
    }else {
        console.log(`${namaKaryawan[i]} || ${gajiKaryawan[i]} || Gaji Rendah`)
        r++;
    }

    total += gajiKaryawan[i];
}

console.log(`\nJumlah Total Gaji Karyawan ${total}`)
console.log(`Jumlah Karayawan Dengan Gaji Tertinggi (${t})`)
console.log(`Jumlah Karayawan Dengan Gaji Sedangg (${s})`)
console.log(`Jumlah Karayawan Dengan Gaji Terendah (${r})`)

let max = Math.max(...gajiKaryawan)
let gajiTertinggi = namaKaryawan.filter((nama, i) => gajiKaryawan[i] === max)
console.log(`\nGaji Tertinggi || ${gajiTertinggi.join(', ')} || ${max}`)

let min = Math.min(...gajiKaryawan)
let gajiTerendah = namaKaryawan.filter((nama, i) => gajiKaryawan[i] === min)
console.log(`Gaji Tertinggi || ${gajiTerendah.join(', ')} || ${min}`)