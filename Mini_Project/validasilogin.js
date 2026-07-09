function daftar(user) {
    if (!user.username || !user.password){
        return "Login gagal"
    }
        return "Login berhasil"
}

let login = {
    username: "Adewardiana",
    password: 123,
}

console.log(daftar(login))