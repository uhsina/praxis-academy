
//contoh
function pertama(a,b){
    return a+b
}
function kedua(c,d){
    return c+d
}
satu = pertama(1,2)
dua = kedua(satu,4)
console.log(satu)
console.log(dua);

//coba rumus jumlah
//
//dengan return (konven)
function jumlah(a,b,c,d){
    return a+b+c+d
};
console.log(jumlah(5,7,9,11));
//dengan return (advan)
function jumlah3(...nums){
    jumlah = 0
    for(let i of nums){
        jumlah += i
    }
    return jumlah
};
console.log(jumlah3(5,7,9,11,4,4));
//
//tanpa return
function jumlah2(a,b,c,d){
    console.log(a+b+c+d)
};
let hasil2 = jumlah2(1,2,3,4);


//defining a function
const square = function(x){
    return x*x;
};
console.log(square(4));
//
const teriak = function(){
    console.log('Lee MM!');
}
teriak();

//bindings and scopes
let x = 10;
if (true){
    let y = 20;
    var z = 30;//var scopenya global
    console.log(x+y+z)
}
console.log(x+z);//var masih bisa ditarik dr luar function
//
const setengah = function(n){
    return n/2;
};
let n = 10
console.log(setengah(150));
console.log(n);

//nested scope
const timus = function(factor){
    const ingredient= function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1){
            unit += 's';
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, 'rantang', 'menyok');
    ingredient(0.25, 'gelas', 'gula');
    ingredient(0.5, 'gelas', 'kelapa parut');
    ingredient(0.25, 'tablespoon', 'garam');
    ingredient(0.25, 'tablespoon', 'vanili')
};
console.log(timus(2));