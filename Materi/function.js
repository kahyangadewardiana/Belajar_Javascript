function HitungLuas(panajng, lebar) {
    return panajng * lebar;
}

let hasil = HitungLuas(8, 8)
console.log(hasil)

function cekGenap(angaka) {
    return angaka % 2 === 0;
}

console.log(cekGenap(7))
console.log(cekGenap(8))


function kalkulator(angak1, angka2, operasi) {
    switch (operasi) {
        case "+":
            return angak1 + angka2;
            break;
        case "-":
            return angak1 - angka2;
            break;
        case "*":
            return angak1 * angka2;
            break;
        case "/":
            return angak1 / angka2;
            break;
        default:
            console.log('Pilihan Tidak Valid')
            break;
    }
}

console.log(kalkulator(10, 5, "+"))
console.log(kalkulator(10, 5, "-"))
console.log(kalkulator(10, 5, "*"))
console.log(kalkulator(10, 5, "/"))