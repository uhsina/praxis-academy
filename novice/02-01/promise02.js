const hitung = (a, b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            a>0 ?
            resolve (a + b)
            :
            reject("a-nya kurang")
        }, 2000);
    })
}
let x = hitung(4, 3)

x.then(x=>console.log(x)).catch(err=>console.log(err))