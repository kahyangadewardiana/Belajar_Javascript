const siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Caca", nilai: 45 },
  { nama: "Deni", nilai: 95 },
  { nama: "Euis", nilai: 75 }
];

const Nilai = siswa.map((_, i) => {
    let status = '';
    if (siswa[i].nilai >= 80) status = 'Lulus Memuaskan'


    console.log(`${siswa[i].nama} || ${siswa[i].nilai} || ${status}`)
    return status;
})