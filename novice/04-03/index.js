const express = require('express');
const expressHbs = require('express-handlebars');

const db = require('./db');
const routes = require('./routes');

db.connect();

const app = express();
app.engine('hbs', expressHbs({
    extname: 'hbs',
    defaultLayout: false,
}));
app.set('view engine', 'hbs');

app.use('/', routes);

app.listen(8080, () => {
    console.log('aplikasi jalan nih bro!');
});