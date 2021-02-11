
class tambahKalori{
    constructor(kalori){
        this.kalori = kalori;
    }
    makan(){
        this.kalori += 1500;
    }
    minum(){
        this.kalori += 50;
    }
}

class kurangKalori extends tambahKalori{
    constructor(kalori){
        super(kalori)
    }

    lari(){
        this.kalori -= 500
    }

    renang(){
        this.kalori -= 550
    }

    idealKal(){
        if(this.kalori <= 2000){
            return "kadar kalori ideal"
        }
        else{
            return `Perbanyak olahraga`
        }
    }
}
const hitungKal = new kurangKalori(0)
hitungKal.makan()
hitungKal.minum()
hitungKal.lari()
console.log(hitungKal.kalori)
console.log(hitungKal.idealKal())