class rectangle {
    constructor(panjang, lebar){
        this.panjang = panjang;
        this.lebar = lebar;
    }
    //getter
    get area(){
        return this.luas();
    }
    //method
    luas(){
        return this.panjang * this.lebar;
    }
    keliling(){
        return (this.panjang + this.lebar) * 2;
    }
}
class kardusPersegiP extends rectangle{
    constructor(panjang, lebar, tinggi){
        super(panjang, lebar)
        this.tinggi = tinggi;

    }
    volume(){
        return this.panjang * this.lebar * this.tinggi;
    }
}
const hasilVolume = new kardusPersegiP(2, 4, 6)
console.log(hasilVolume.volume())


