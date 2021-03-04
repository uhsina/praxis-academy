const Router = require('express').Router;
const penjualanController = require('./controllers/penjualan');

const r = Router();

r.get('/', penjualanController.index);

module.exports = r;