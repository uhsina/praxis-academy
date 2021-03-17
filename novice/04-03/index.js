const express = require('express');
const bp = require('body-parser')
const expressHbs = require('express-handlebars');

const db = require('./db');
const routes = require('./routes/daftarbarangRoutes');
const akunroutes = require('./routes/akunRoutes');

db.connect();

const app = express();
app.engine('hbs', expressHbs({
    extname: 'hbs',
    defaultLayout: false,
}));
app.set('view engine', 'hbs');

app.use(bp.urlencoded({extended: false}));

app.use('/', routes);
app.use('/', akunroutes);

app.listen(8080, () => {
    console.log('aplikasi jalan nih bro!');
});