const Router = require('express').Router;
const akunController = require('../controllers/akun');

const r = Router();

//.get('/', penjualanController.index);
//r.get('/tambah', penjualanController.formInsert);
//r.post('/tambah', penjualanController.processInsert);
//r.get('/kurangi', penjualanController.formDelete);
//r.post('/kurangi', penjualanController.processDelete);

r.get('/akun', akunController.index);
r.get('/akun/tambahAkun', akunController.InsertAkun);
r.post('/akun/tambahAkun', akunController.processInsertAkun);
r.get('/akun/deleteAkun', akunController.DeleteAkun);
r.post('/akun/deleteAkun', akunController.processDeleteAkun);


module.exports = r;