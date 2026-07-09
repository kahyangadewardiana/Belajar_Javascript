let karyawan = [
    { nama: "Andi", gaji: 5000000, hadir: 22 },
    { nama: "Budi", gaji: 3500000, hadir: 18 },
    { nama: "Caca", gaji: 7000000, hadir: 25 },
    { nama: "Dina", gaji: 4000000, hadir: 15 },
    { nama: "Eka", gaji: 6000000, hadir: 20 }
];

for (let i = 0; i < karyawan.length; i++){
    if (karyawan[i].hadir >= 20){
        let status = "Rajin"
    } 

    console.log(`${karyawan[i].nama} Hadir : ${karyawan[i].hadir} || ${status}`)
}