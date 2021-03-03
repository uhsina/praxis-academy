//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
const app = express();
const { Client } = require('pg')
// for connection information 

//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
//set public folder as static folder for static file
app.use(express.static('public'));


const db = new Client({
  database: 'akun',
  user: 'postgres',
  password:'123123123'
})

db.connect(function(err) {
  if (err) throw err;
  let pg = `create table iduser(
    id varchar(3),
    nama char(20)
  ) `
  db.query(pg, function(err, result) {
    console.log("Tabel sudah dibuat!")
  });
});
//===========================

app.get('/user',(req,res)=>{
  let pg='select *from iduser';
  let query =db.query(pg,(err,result)=>{
    if (err) throw err;
    console.log(result)
    res.render('main',{employee:result.rows})
  })
})

/*
app.get('/',(req, res) => {
  //render file index.hbs
  res.render('index',{
    name : "Hong Home"
  });
});
 
//route untuk halaman home dengan parameter name
app.get('/:name',(req, res) => {
  //render file index.hbs
  res.render('index',{
    name : req.params.name
  });
});
 */

//============================

//app.get('/', (req, res)=>{ 
//    res.render('demo') 
//}) 
/*
var demo = { 
	nama : 'Lohan',
	umur : 26,
    jenkel: 'laki',
    alamat: 'wonokromo'

} 

app.get('/', (req, res)=>{ 
	res.render('dynamic', {demo:demo}) 
}) */

/*
var projects = { 
	nama : 'Regul', 
	skills : ['node js', 'front end', 'python'] 
} 

app.get('/projects', (req, res)=>{ 
	res.render('projects', {projects : projects});
}) 
*/




app.listen(3000, () => {
  console.log('Server is running at port 3k');
});


