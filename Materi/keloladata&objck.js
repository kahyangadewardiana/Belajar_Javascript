let dompet = {
    pemilik: 'Ade Wardiana',
    saldo: 50000,

    tambahsaldo: function (jumlah){
        this.saldo += jumlah;
    }
};

dompet.tambahsaldo(30000)

console.log(`Total Jumlah Saldo : ${dompet.saldo}`)