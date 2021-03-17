const db = require('../db');;

const getAllAkun = async () => {
    return db.query(`
    SELECT * FROM akun
    `);
};

const InsertAkunku = async (akun) => {
    return db.query(`
    insert into akun values(
        $1,
        $2,
        $3
    )
    `, [akun.id, akun.nama, akun.jabatan]
    );
};

const DeleteAkunku = async (akun) => {
    return db.query(`
    delete from akun where id = ($1)
    `, [akun.id]
    );
};

module.exports = {
    getAllAkun,
    InsertAkunku,
    DeleteAkunku,
}