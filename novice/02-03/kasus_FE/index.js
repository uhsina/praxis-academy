const express = require('express');

const router = require('./router.js')//tambahan krn nyambung ke router.js

const app = express();
app.use(express.static('public'));
app.use('/', router);

//bisa diakses umum
//tambahan krn nyambung ke router.js

//routing dipindah ke router.js
//app.get('/', (req, res) => {
//
//    res.send('ra masokkk bos');
//});

//app.get('/about-us',(req, res) => {
//    res.send('kami adalah hamba makanan!')
//});


app.listen(8080)
console.log('apl ini jalan dong broo')

//port http adlh '80'
//'http://localhost:8080'