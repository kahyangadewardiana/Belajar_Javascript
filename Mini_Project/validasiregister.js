function validasiDaftar(user) {
    if (!user.username || !user.email){
        return "Registrasi Gagal: Data tidak boleh kosong!";
    }
    return `Registrasi Berhasil untuk ${user.username}`;
}

let userBaru = {
    username: "adewardiana",
    email: ""
}

console.log(validasiDaftar(userBaru))