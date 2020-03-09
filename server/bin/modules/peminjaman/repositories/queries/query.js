//const ObjectId = require("mongodb").ObjectId;

class Query {
  constructor(db) {
    this.db = db;
  }

  async getPeminjaman(parameter) {
    const data = await this.db.query(`SELECT peminjam.no_pinjam, anggota.nm_anggota, petugas.nm_petugas, peminjam.tgl_pinjam FROM
            anggota JOIN peminjam ON anggota.kd_anggota=peminjam.kd_anggota Join petugas ON peminjam.kd_petugas=petugas.kd_petugas`) 
    //console.log(dataGetId);
    return data;
  }

  async getPeminjamanById(parameter) {
    const data = await this.db.query(`SELECT peminjam.no_pinjam, anggota.nm_anggota, petugas.nm_petugas, peminjam.tgl_pinjam FROM
            anggota JOIN peminjam ON anggota.kd_anggota=peminjam.kd_anggota Join petugas ON peminjam.kd_petugas=petugas.kd_petugas
            WHERE peminjam.no_pinjam =`+ parameter) 
    //console.log(dataGetId);
    return data;
  }

  async postPeminjaman(parameter) {
    const post = await this.db.query(`INSERT INTO peminjam (kd_anggota, kd_petugas) 
            VALUES ('`+parameter.kd_anggota+`','`+parameter.kd_petugas+`');`);
    if(!post){return err}
    const data = await this.db.query(`SELECT peminjam.no_pinjam, anggota.nm_anggota, petugas.nm_petugas, peminjam.tgl_pinjam FROM
            anggota JOIN peminjam ON anggota.kd_anggota=peminjam.kd_anggota Join petugas ON peminjam.kd_petugas=petugas.kd_petugas
            ORDER BY peminjam.no_pinjam DESC limit 1`) 
    //console.log(parameter);
    return data;
  }
}

module.exports = Query;
