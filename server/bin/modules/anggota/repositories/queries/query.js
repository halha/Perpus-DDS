class Query {

  constructor(db){
    this.db = db;
  }

  async getAnggota() {
    const record = await this.db.query('SELECT * from anggota');
    return record;
  }

  async getAnggotaId(params) {
    const record = await this.db.query('SELECT kd_anggota, nm_anggota, alamat, tlpn, email_anggota, ps_anggota from anggota WHERE anggota_id.id =' + params);
    return record;
  }

  async postAnggota(params) {
    const postRecord = await this.db.query(`INSERT INTO anggota (kd_anggota, nm_anggota, alamat, tlpn, email_anggota, ps_anggota
      VALUES ('`+params.kd_anggota+`','`+params.nm_anggota+`','`+params.alamat+`','`+params.tlpn+`','`+params.email_anggota+`','`+params.ps_anggota+`');`);
    return postRecord;
  }

  async deleteAnggota(id) {
    const record = await this.db.query('DELETE FROM anggota WHERE anggota_id.id' + id);
    return record;
  }

  async updateAnggota(body) {
    const record = await this.db.query(`UPDATE anggota 
      SET kd_anggota='`+body.kd_anggota+`',
      nm_anggota='`+body.nm_anggota+`'
      alamat='`+body.alamat+`'
      tlpn='`+body.tlpn+`'
      email_anggota='`+body.email_anggota+`'
      ps_anggota='`+body.ps_anggota+`'`);
      return record;
  }
}

module.exports = Query;