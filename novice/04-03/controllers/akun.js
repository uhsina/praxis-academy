const AkunModel = require('../models/akun')
;

const index = async(req, res) => {
    const akuns = await AkunModel.
    getAllAkun();
    res.render('akun', {
        akuns: akuns.rows,
    });
};

const InsertAkun = (req, res) => {
    res.render('tambahAkun');
};

const processInsertAkun = async (req, res) => {
    await AkunModel.InsertAkunku(req.body);
    res.redirect('/akun');
};


const DeleteAkun = (req, res) => {
    res.render('deleteAkun');
};

const processDeleteAkun = async (req, res) => {
    await AkunModel.DeleteAkunku(req.body);
    res.redirect('/akun');
};


module.exports = {
    index,
    InsertAkun,
    processInsertAkun,
    DeleteAkun,
    processDeleteAkun,
};