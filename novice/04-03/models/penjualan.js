const db = require('../db');;

const getAllPenjualan = async () => {
    return db.query(`
    SELECT * FROM tab_barang
    `);
};

const insertPenjualan = async (tab_barang) => {
    return db.query(`
    insert into tab_barang values(
        $1,
        $2,
        $3
    )
    `, [tab_barang.kode_barang, tab_barang.nama_barang, tab_barang.harga]
    );
};

const deletePenjualan = async (tab_barang) => {
    return db.query(`
    delete from tab_barang where kode_barang = ($1)
    `, [tab_barang.kode_barang]
    );
};

module.exports = {
    getAllPenjualan,
    insertPenjualan,
    deletePenjualan,
}