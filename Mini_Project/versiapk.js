function cekUpdate(versiSekarang, versiTerbaru) {
    if (versiSekarang === versiTerbaru){
        return 'Aplikasi Anda sudah versi terbaru'
    }
    return `Update tersedia! Silakan perbarui ke versi ${versiTerbaru}`
}

console.log(cekUpdate("1.0.0", "1.1.0"))