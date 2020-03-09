class Query {

  constructor(db){
    this.db = db;
  }

  async getAnggota() {
    const record = await this.db.query('SELECT * from anggota');
    return record;
  }

  async postAnggota(params) {
    const postRecord = await this.db.query(`INSERT INTO anggota (kd_anggota, nm_anggota, alamat, tlpn, email_anggota, ps_anggota
      VALUES ('`+params.kd_anggota+`','`+params.nm_anggota+`','`+params.alamat+`','`+params.tlpn+`','`+params.email_anggota+`','`+params.ps_anggota+`');`);
    return postRecord;
  }
}

module.exports = Query;