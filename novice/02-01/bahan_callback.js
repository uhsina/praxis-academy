// membuat callback
const hitung = (a, b, callback)=>{
    return callback (a, b)
}
const tambah = (a, b)=>{
    return a + b
}
const kurang = (a, b)=>{
    return a - b
}
const kali = (a, b)=>{
    return a * b
}
let x = hitung(2, 3, kali)
let y = hitung(5, 2, kurang)
console.log();
console.log();

module.exports = {hitung,tambah,kurang,kali};