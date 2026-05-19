let angka = 5

while (angka <= 25) {
    console.log(`${angka}`)
    angka+=5;
}

let detik = 3;

while (detik > 0) {
    console.log(`Lampu kuning dalam.....${detik}`)
    detik--;
}

console.log("Lampu Merah")

let jawabanBenar = 7
let userInput = 1

while (userInput != jawabanBenar) {
    console.log(`Tebakan salah, coba lagi...`)
    userInput+=1;
}

console.log("Selamat! Angka 7 adalah jawaban yang benar.")

let baterai = 3;

while (baterai > 0) {
    console.log("HP Menyala... Baterai sisa: " + baterai);
    // Penting! Kurangi baterai agar loop berhenti nantinya
}

console.log("HP Mati.");