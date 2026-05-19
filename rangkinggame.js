let namaPemain = ["Rizky", "Asep", "Nina", "Putri", "Fajar"];
let skorPemain = [95, 60, 30, 80, 50];
let total = 0, rankS = 0 , rankA = 0, rankB = 0;

for (let i = 0; i < skorPemain.length; i++){
    if (skorPemain[i] >= 80){
        console.log(`Nama : ${namaPemain[i]} Skor : ${skorPemain[i]} = Rank S`);
        rankS++;
    } else if (skorPemain[i] >= 50 && skorPemain[i] < 80) {
        console.log(`Nama : ${namaPemain[i]} Skor : ${skorPemain[i]} = Rank A`);
        rankA++;
    } else {
        console.log(`Nama : ${namaPemain[i]} Skor : ${skorPemain[i]} = Rank B`);
        rankB++;
    }

    total += skorPemain[i];
}
let tertinggi = Math.max(...skorPemain);
let pemainTertinggi = namaPemain.filter((nama, index) => skorPemain[index] === tertinggi)
console.log(`Nilai tertinggi adalah ${tertinggi} oleh: ${pemainTertinggi.join(", ")}`);

let terendah = Math.min(...skorPemain)
let pemainTerendah = namaPemain.filter((nama, index) => skorPemain[index]=== terendah)
console.log(`Nilai terendah adalah ${terendah} oleh: ${pemainTerendah.join(", ")}`);

console.log(`Total Seluruh Skor ${total}`)
console.log(`Jumlah Rank S : ${rankS}`)
console.log(`Jumlah Rank A : ${rankA}`)
console.log(`Jumlah Rank B : ${rankB}`)

let ratarata =  total / skorPemain.length
console.log (`Nilai Rata-rata skorPemain : ${ratarata}`)