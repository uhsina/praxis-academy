const Router = require('express').Router;
const penjualanController = require('../controllers/penjualan');

const r = Router();

r.get('/', penjualanController.index);
r.get('/tambah', penjualanController.formInsert);
r.post('/tambah', penjualanController.processInsert);
r.get('/kurangi', penjualanController.formDelete);
r.post('/kurangi', penjualanController.processDelete);

module.exports = r;