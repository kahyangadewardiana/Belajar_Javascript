let kendaraan = "Mobil"
let durasi = 6

let tarifperjam = 0;

if (kendaraan === "Motor"){
    tarifperjam = 2000
}else if(kendaraan === "Mobil"){
    tarifperjam = 5000
}else{
    console.log("Jenis Kendaraan tidak ada")
}

let total = durasi * tarifperjam

if (durasi > 5){
    total -= 3000
}

console.log(`Kendaraan ${kendaraan}, Durasi ${durasi} Jam, Total Bayar : Rp ${total}`)