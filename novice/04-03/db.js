const PgClient = require('pg').Client;

const db = new PgClient({
    database: 'penjualan',
    user: 'postgres',
    password: '123123123'
});

module.exports = db;