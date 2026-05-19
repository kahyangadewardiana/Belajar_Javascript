let namaSiswa = ["Andi", "Budi", "Caca", "Deni", "Euis"];
let kehadiran = [28, 20, 15, 30, 25];
let total = 0, sRajin = 0, Rajin = 0, kRajin = 0;

for (let i = 0; i < kehadiran.length; i++){
    if (kehadiran[i] >= 26){
        console.log(`${namaSiswa[i]}, Jumlah Kehadiran ${kehadiran[i]} hari : SANGAT RAJIN`);
        sRajin++;
    } else if (kehadiran[i] >= 20 && kehadiran[i] < 26){
        console.log(`${namaSiswa[i]}, Jumlah Kehadiran ${kehadiran[i]} hari : RAJIN`);
        Rajin++;
    } else {
        console.log(`${namaSiswa[i]}, Jumlah Kehadiran ${kehadiran[i]} hari : KURANG RAJIN`);
        kRajin++;
    }

    total += kehadiran[i];
}

console.log(`Total Seluruh Kehadiran : ${total} hari`);
console.log(`Jumlah Siswa Yang Sangat Rajin : ${sRajin}`);
console.log(`Jumlah Siswa Yang Rajin : ${Rajin}`);
console.log(`Jumlah Siswa Yang Kurang Rajin : ${kRajin}`);

let ratarata = total / kehadiran.length;
console.log(`Jumlah Rata-Rata Kehadiran Siswa : ${ratarata}`)

let tertinggi = Math.max(...kehadiran);
let name = namaSiswa.filter((nama, index) => kehadiran[index] ===  tertinggi);
console.log(`Kehadiran Tertinggi : ${name.join(", ")} - ${tertinggi} hari`);

let terendah = Math.min(...kehadiran)
let nameMin = namaSiswa.filter((nama, a) => kehadiran[a] === terendah);
console.log(`Kehadiran Terendah : ${nameMin.join(", ")} - ${terendah} hari`)


let namaSiswa = ["Andi", "Budi", "Caca", "Deni", "Euis"];
let kehadiran = [28, 20, 15, 30, 25];

const statusSiswa = namaSiswa.map((nama, i) => {
    let status = '';
    if(kehadiran[i] >= 26) status = "Sangat Rajin";
    else if (kehadiran[i] >= 20 && kehadiran[i] < 26) status = "Rajin";
    else status = "Kurang Rajin";

    console.log(`${nama}, Jumlah Kehadiran ${kehadiran[i]}, Status ${status}`)
    return status;
})

const total = kehadiran.reduce((a, b) => a + b, 0);

const sRajin = statusSiswa.filter(s => s === "Sangat Rajin").length;
const rajin = statusSiswa.filter(a => a ==="Rajin").length;
const kRajin = statusSiswa.filter(b => b === "Kurang Rajin").length;

console.log(`\nJumlah Siswa Sangat Rajin Adalah ${sRajin} Siswa`);
console.log(`Jumlah Siswa Rajin Adalah ${rajin} Siswa`);
console.log(`Jumlah Siswa Kurang Rajin Adalah ${kRajin} Siswa`);
console.log(`Jumlah Total Kehadiran ${total} hari`);

const ratarata = total / kehadiran.length;
console.log(`Jumlah Rata-Rata Siswa Yang Hadir Adalah ${ratarata} Hari`);

let max = Math.max (...kehadiran);
let hadirTertinggi = namaSiswa.filter((nama, i) => kehadiran[i] === max);
console.log(`\n${hadirTertinggi.join(', ')} Jumlah Hadir ${max} Hari`);

let min = Math.min(...kehadiran);
let hadirTerendah = namaSiswa.filter((nama, i) => kehadiran[i] === min)
console.log(`${hadirTerendah.join(', ')} Jumlah Hadir ${min} Hari`)