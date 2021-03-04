const penjualanModel = require('../models/penjualan')
;

const index = async(req, res) => {
    const penjualans = await penjualanModel.
    getAllPenjualan();
    res.render('home', {
        penjualans: penjualans.rows,
    });
};

module.exports = {
    index,
};