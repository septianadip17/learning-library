// soal Coding:
 
// Input 3 nilai:
// TUGAS = 85
// UTS = 90
// UAS = 100
 
// Hitung nilai akhir dengan rumus:
// TUGAS = 25%, UTS = 30%, UAS = 45%.
// Setelah didapat nilai akhir, tentukan grade dengan ketentuan:
// Nilai 80 ke atas → A
// Di atas 70 → B
// Di atas 55 → C
// Di atas 40 → D
// Selain itu → E

// Tampilkan hasil seperti contoh:
// Nilai Akhir: 93.50
// Grade: A

// const tugas = 83;
// const uts = 85;
// const uas = 83;

// const nilaiAkhir = (tugas * 0.25) + (uts * 0.30) + (uas * 0.45);
// console.log(nilaiAkhir);

// if (nilaiAkhir >= 84) {
//     grade = 'A';
// } else if (nilaiAkhir >= 70) {
//     grade = 'B';
// } else if (nilaiAkhir >= 55) {
//     grade = 'C';
// } else if (nilaiAkhir >= 40) {
//     grade = 'D';
// } else {
//     grade = 'E';
// }


// console.log(`Nilai Akhir: ${nilaiAkhir.toFixed(2)}`);
// console.log(`Grade: ${grade}`);


function getGrade(nilai) {
    if (nilai >= 80) return 'A';
    if (nilai > 70) return 'B';
    if (nilai > 55) return 'C';
    if (nilai > 40) return 'D';
    return 'E';
}

const tugas = 83;
const uts = 85;
const uas = 83;

// Hitung nilai akhir
const nilaiAkhir = (tugas * 0.25) + (uts * 0.30) + (uas * 0.45);
const grade = getGrade(nilaiAkhir);

console.log(`Nilai Akhir: ${nilaiAkhir.toFixed(2)}`);
console.log(`Grade: ${grade}`);