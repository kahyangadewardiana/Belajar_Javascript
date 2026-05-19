let namaKaryawan = ["Andi", "Budi", "Caca", "Deni", "Euis"];
let gajiKaryawan = [7000000, 4000000, 2500000, 9000000, 5000000];

// 7 4 dan 7 , 4

const Gaji = gajiKaryawan.map((_, i) => {
    let umr = '';
    if (gajiKaryawan[i] >= 7000000) umr = 'Hayang Aing';
    else if (gajiKaryawan[i] >= 4000000 && gajiKaryawan[i] < 7000000) umr = 'Hayang Oge';
    else umr = 'Bolehlah';

    console.log(`${namaKaryawan[i]} Gajinya ${gajiKaryawan[i]} || ${umr}`)
    return umr;
})

const total = gajiKaryawan.filter((a, b) => a + b, 0)

const s = Gaji.filter(s => s === 'Hayang Aing').length;
const a = Gaji.filter(s => s === 'Hayang Oge').length;
const b = Gaji.filter(s => s === 'Bolehlah').length;

console.log(`Jumlah Gajih Karyawan Diatas Umr : ${s}`)
console.log(`Jumlah Gajih Karyawan Umr : ${a}`)
console.log(`Jumlah Gajih Karyawan Dibawah Umr : ${b}`)