//Penjualan Bundling Gazebo
//untuk mengetahui jumlah masing2 bahan
//sesuai jumlah pesanan gazebo
const gazebo = function(jmlh_pesanan){
    const bahan = function(jmlh_barang, nm_satuan, nm_barang){
        let jumlah_bahan = jmlh_barang * jmlh_pesanan;
        console.log(`${jumlah_bahan} ${nm_satuan} ${nm_barang}`);
    }
    bahan(8, 'papan', 'kayu jati');
    bahan(100, 'biji', 'kayu reng');
    bahan(1.5, 'kilo', 'paku reng');
    bahan(1, 'kilo', 'paku beton');
    bahan(800, 'biji', 'genteng');
    bahan(3, 'liter', 'plitur');
}
console.log(gazebo(4));

//Kalkulator Khusus Tabung
//untuk mengetahui: volume, luas alas, keliling alas&tutup,
//luas selimut, dan luas permukaan tabung
//
const pi = 3.14;
let kalkulator_tabung = {
    luas_alas : (r)=> `Luas alasnya adalah: ${(pi * r * r).toFixed(2)}`,
    keliling_alas : (r)=> `Keliling alasnya adalah: ${(pi * r).toFixed(2)}`,
    luas_selimut : (r, t)=> `Luas selimutnya adalah: ${(2 * pi * r * t).toFixed(2)}`,
    keliling_selimut : (r, t)=> `Keliling selimutnya adalah: ${(2*(pi * r) + 2*(t)).toFixed(2)}`,
    volume_tabung : (r, t)=> `Volum tabungnya adalah: ${(pi * r * r * t).toFixed(2)}`,
    luas_permukaan : (r, t)=> `Luas permukaan tabungnya adalah:${(2 * pi * r*(r+t)).toFixed(2)}`,
};
let hasil_kalkulator = [
    null,
    kalkulator_tabung.luas_alas(5),
    kalkulator_tabung.keliling_alas(5),
    kalkulator_tabung.luas_selimut(5, 7),
    kalkulator_tabung.keliling_selimut(5, 7),
    kalkulator_tabung.volume_tabung(5, 7),
    kalkulator_tabung.luas_permukaan(5, 7)
]
for(i = 1; i < hasil_kalkulator.length; i++){
    console.log(`${i}. ${hasil_kalkulator[i]}`);
}