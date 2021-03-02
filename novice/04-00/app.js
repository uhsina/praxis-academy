//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
const app = express();
 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
//set public folder as static folder for static file
app.use(express.static('public'));


//route untuk halaman home
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

var demo = { 
	nama : 'Lohan',
	umur : 26,
    jenkel: 'laki',
    alamat: 'wonokromo'

} 

app.get('/', (req, res)=>{ 
	res.render('dynamic', {demo : demo}) 
}) 


var projects = { 
	nama : 'Regul', 
	skills : ['node js', 'front end', 'python'] 
} 

app.get('/projects', (req, res)=>{ 
	res.render('projects', {projects : projects});
}) 



app.listen(8000, () => {
  console.log('Server is running at port 8000');
});


