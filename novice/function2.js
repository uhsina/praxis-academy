//contoh function (keyword)
//dg return
function luasLingkaran(){
    let hasil = 3.14 * 5 * 5;
    return hasil; //return menghentikan proses dan memberikan nilai
}
console.log(luasLingkaran());
//tanpa return
function luasLingkaran2(){
    let pi = 3.14;
    hasil2 = pi * 4 * 4;
    console.log('luas lingkaran' + hasil2);
}
//penggantian parameter dlm function (r=5)
function luas_Lingkaran(r) {
    let hasil_ = 3.14 * r * r;
    return hasil_;
}

let luas_ = luas_Lingkaran(5);
console.log(luas_);

//latihan
//
function luas_persegi_pnjng(p,l){
    let hasil3 = p * l;
    return hasil3;
}
console.log(luas_persegi_pnjng(4,5))

//arrow function (cara simpel)
//
let l_persegi_pangjang = (p, l) => {
    let hasil4 = p * l;
    return hasil4;
}
let luasPP = l_persegi_pangjang(5, 4);
console.log(luasPP);
//lebih singkat
let LuasPersegiP = (p, l) => p * l ;
let luasPP2 = LuasPersegiP(5, 4);
console.log(luasPP2);