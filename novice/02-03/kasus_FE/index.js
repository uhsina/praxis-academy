const express = require('express');

const app = express();

//bisa diakses umum
app.use(express.static('public'));

//routing
app.get('/', (req, res) => {

    res.send('ra masokkk bos');
});

app.get('/about-us',(req, res) => {
    res.send('kami adalah hamba makanan!')
});


app.listen(8080)
console.log('apl ini jalan dong broo')

//port http adlh '80'
'http://localhost:8080'