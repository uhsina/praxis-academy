const db = require('../db');;

const getAllPenjualan = async () => {
    return db.query(`
    SELECT * FROM tab_barang
    `);
};

const getPenjualanByID = async (id) => {
    return db.query(`
    SELECT * FROM tab_barang
    `, [id]);
};

module.exports = {
    getAllPenjualan,
    getPenjualanByID,
}