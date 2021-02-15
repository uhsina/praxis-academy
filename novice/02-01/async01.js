const fetch = require("node-fetch");
const fetchData = async (id)=>{
    try{
        let hasil = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        let hasil2 = await hasil.json()
        return hasil2;
    } catch (error){
        console.log(error);
    }
};

fetchData(2).then(data=>console.log(data.id)).catch(err=>console.log(err))