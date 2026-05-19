// let Belanjaan = ["telur", "Susu", "Roti"];

// Belanjaan[1] = "kopi";

// console.log(Belanjaan.length);


// let tanaman = ["Matahari", "Melati", "Mawar"]

// tanaman.push("Anggrek")

// tanaman [1] = "Tulip"

// console.log(tanaman)


let stok = [10, 5, 0, 15, 0];

for (let i = 0; i < stok.length; i++) {
  if (stok[i] === 0) {
    console.log("Stok Kosong");
  } else {
    console.log("Stok Tersedia");
  }
}