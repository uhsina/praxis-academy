const kelinci01 = ()=> (new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("kelinci nomor 1")}, 1000)
}))
const kelinci02 = ()=> (new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("kelinci nomor 2")}, 500)
}))
const kelinci03 = ()=> (new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("kelinci nomor 3")}, 200)
}))

async function promiseAll(){
    let results = await Promise.all(
        [kelinci01(), kelinci02(), kelinci03()]
    )
    console.log(results);
}
async function promiseRace(){
    let results = await Promise.race(
        [kelinci01(), kelinci02(), kelinci03()]
    )
    console.log(results);
}

promiseAll()
promiseRace()