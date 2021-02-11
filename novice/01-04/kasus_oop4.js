//OOP(Object Oriented Programming)
//rograming yang beriorentasi objek

//simpel
class Bingkisan {
    constructor(nama, harga) {
        this.nama = nama;
        this.harga = harga;
    }
    keterangan() {
        return this.nama + " " + this.harga
    }
}
const produk1 = new Bingkisan("masker de n do", 15000);
const produk2 = new Bingkisan("mug de n do", 38000);
const produk3 = new Bingkisan("walldekor 20x20", 19000);
const produk4 = new Bingkisan("walldekor 20x30", 28000);
const produk5 = new Bingkisan("walldekor 30x40", 38000);
console.log(produk2.nama)
console.log(produk3.harga)
console.log(produk4.keterangan());

//4 Pilar OOP
//
//01 Encapsulation
//atau enkapsulasi adalah cara untuk membatasi 
//akses langsung ke properti atau method dari sebuah objek
//
function Pengiriman(unit){
    this.packing = 3000;//publik
    this.ongkir = function(){//publik
        return unit * 5000
    }
    this.totalBiaya = function(){
        return this.ongkir() +this.packing
    }
}
const daging = new Pengiriman(2);
daging.packing = 5000 //perintah luar dapat mengubah hasil
console.log(daging.totalBiaya())// 15000 (seharusnya 13000)
// serupa ^ tapi dibuat privat
function Pengiriman1(unit1){
    var packing1 = 3000;//privat
    var ongkir1 = function(){//privat
        return unit1 * 5000
    }
    this.totalBiaya1 = function(){
        return ongkir1() + packing1//privat
    }
}
const daging1 = new Pengiriman1(2);
daging1.packing1 = 5000 //perintah luar tdk dapat mengubah hasil
console.log(daging1.totalBiaya1())
//
//02 Inheritance
//Inheritance dalam OOP adalah sebuah proses dimana 
//sebuah class mewariskan property dan methodnya ke class lain atau childnya.
//
class KastaMlbb{
    constructor(nama, role){
        this.nama = nama;
        this.role = role;
    }
}
class JulukanMlbb extends KastaMlbb{//subclass dari KastaMlbb
    constructor(nama, role, kemampuan){
        super(nama, role);
        this.kemampuan = kemampuan;
    }
    info_lengkap(){
        return this.nama +" "+ this.role +" "+ this.kemampuan
    }
}
const baginda = new JulukanMlbb("Ajek Si Gelap", "tidak jelas", "sangat jelek");
const victor = new JulukanMlbb("Ajek Babi Alien", "tank", "lumayan");
console.log(baginda.role)
console.log(victor.kemampuan)
console.log(baginda.info_lengkap())
//
//03 Polymorphism
//Dari asal katanya, poly berarti banyak dan morphe berarti bentuk
//Polymorphism adalah kemampuan untuk membuat variabel, fungsi, atau objek yang memiliki banyak bentuk
//
class Orang{
    constructor(nama){
        this.nama = nama;
    }
    greet(){
        return `Hello, piling gud lekesut ${this.nama} !`
    }
}
class Individu extends Orang{
    constructor(nama){
        super(nama)
    }
    greet(){ //jika rankaian greet ini dihilangkan, tetap akan keluar hasil dari yang atas
        return `Halo, ${this.nama} si babi alien!`//
    }//bisa dicoba dengan tutup rangkaian /* .. */
}
const ajek2 = new Individu("Victor")
console.log(ajek2.greet())
//
//04 Abstraction
//Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu 
//ari sebuah objek dan hanya menampilkan fungsionalitas atau fitur penting
//
function OngkosKirim(berats){
    var berats = berats;
    var totalBiaya2 = function(){
        return berats * 5000
    }
    this.tampilBiaya2 = function(){
        return totalBiaya2()
    }
}
const tape = new OngkosKirim(2);
console.log(tape.tampilBiaya2())