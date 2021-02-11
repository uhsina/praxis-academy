var http = require('http');
var server = http.createServer(function(req, res){
    res.end("Hi, selamat pagi, tetap semangat ya! jangan sedih, karena banyak yang sayang kamu!Jaga dedek agar tetap sehat ya, makan yang banyak HeHe!");
});
server.listen(8000);
console.log("server running on http://localhost:8000");