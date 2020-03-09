//const ObjectId = require("mongodb").ObjectId;

class Query {
  constructor(db) {
    this.db = db;
  }

  async getPeminjaman(body) {
    const data = await this.db.query(`SELECT peminjam.no_pinjam, anggota.nm_anggota, petugas.nm_petugas, peminjam.tgl_pinjam FROM
            anggota JOIN peminjam ON anggota.kd_anggota=peminjam.kd_anggota Join petugas ON peminjam.kd_petugas=petugas.kd_petugas`) 
    //console.log(dataGetId);
    return data;
  }

  async getPeminjamanById(body) {
    const data = await this.db.query(`SELECT peminjam.no_pinjam, anggota.nm_anggota, petugas.nm_petugas, peminjam.tgl_pinjam FROM
            anggota JOIN peminjam ON anggota.kd_anggota=peminjam.kd_anggota Join petugas ON peminjam.kd_petugas=petugas.kd_petugas
            WHERE peminjam.no_pinjam =`+ body) 
    //console.log(dataGetId);
    return data;
  }

  async postPeminjaman(body) {
    const post = await this.db.query(`INSERT INTO peminjam (kd_anggota, kd_petugas) 
            VALUES ('`+body.kd_anggota+`','`+body.kd_petugas+`');`);
    if(!post){return err}
    const data = await this.db.query(`SELECT peminjam.no_pinjam, anggota.nm_anggota, petugas.nm_petugas, peminjam.tgl_pinjam FROM
            anggota JOIN peminjam ON anggota.kd_anggota=peminjam.kd_anggota Join petugas ON peminjam.kd_petugas=petugas.kd_petugas
            ORDER BY peminjam.no_pinjam DESC limit 1`) 
    //console.log(parameter);
    return data;
  }

  async deletePeminjaman(id) {
    const data = await this.db.query(`DELETE FROM peminjam WHERE no_pinjam = `+"'"+id+"'")
    console.log(data);

    return data
  }

  async updatePeminjaman(body) {
    const data = await this.db.query(`UPDATE peminjam SET 
    no_pinjam ='`+body.no_pinjam+`',
    kd_anggota ='`+body.kd_anggota+`',
    kd_petugas ='`+body.kd_petugas+`',
    tgl_pinjam ='`+body.tgl_pinjam+`'  `)
    console.log(data);

    return data
  }
  
}

module.exports = Query;
