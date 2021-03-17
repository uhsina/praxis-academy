const penjualanModel = require('../models/penjualan')
;

const index = async(req, res) => {
    const penjualans = await penjualanModel.
    getAllPenjualan();
    res.render('home', {
        penjualans: penjualans.rows,
    });
};

const formInsert = (req, res) => {
    res.render('form-insert');
};

const processInsert = async (req, res) => {
    await penjualanModel.insertPenjualan(req.body);
    res.redirect('/');
};

const formDelete = (req, res) => {
    res.render('form-delete');
};

const processDelete = async (req, res) => {
    await penjualanModel.deleteakunku(req.body);
    res.redirect('/');
};

module.exports = {
    index,
    formInsert,
    processInsert,
    formDelete,
    processDelete,
};