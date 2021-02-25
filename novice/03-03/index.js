const { Client } = require('pg')
// for connection information
const db = new Client({
  database: 'niaga',
  user: 'postgres',
  password:'123123123'
})
// you can also use async/await

// for connection information
//await client.connect()
//const res = await client.query('SELECT NOW()')
//await client.end()
//db.connect()
//.then(()=>console.log("connect"))
//.catch(e=>console.log(e))

//buat tabel(berhasil)
//jika dirun ulang tidak membuat tabel yng sama
db.connect(function(err) {
  if (err) throw err;
  let pg = `create table detail_barang(
    kode_faktur varchar(7),
    kode_barang varchar(6),
    qty int,
    harga int
  ) `
  db.query(pg, function(err, result) {
    console.log("Tabel sudah dibuat!")
  });
});

//menambahkan isi pada tabel(percobaan gagal)
//db.connect(function(err) {
//  if (err) throw err;
//  
//  let pg = "INSERT INTO tab_transaksi (kode_faktur, tanggal) VALUES ?";
//  var values = [
//    ['kd_001',	13/07/2020],
//    ['kd_002',	13/07/2020],
//    ['kd_003',	14/07/2020]
//  ];
//  db.query(pg, [values], function (err, result) {
//      if (err) throw err;
//      console.log("Number of records inserted: " + result.affectedRows);
//  });
//});
