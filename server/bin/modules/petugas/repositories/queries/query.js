class Query {
  constructor(db) {
    this.db = db;
  }

  async getPetugas(parameter) {
    const recordset = await this.db.query(`SELECT * FROM petugas`);
    return recordset;
  }

  async getPetugasId(userId) {
    const recordset = await this.db.query(
      `SELECT * FROM petugas WHERE kd_petugas ='` + userId + `'`
    );
    return recordset;
  }

  async postPetugas(data) {
    const recordset = await this.db.query(
      `INSERT INTO petugas (nm_petugas,jabatan,tlpn_petugas,email_petugas,ps_petugas) 
    VALUES ('` +
        data.nm_petugas +
        `','` +
        data.jabatan +
        `','` +
        data.tlpn_petugas +
        `','` +
        data.email_petugas +
        `','` +
        data.ps_petugas +
        `')`
    );
    console.log(recordset);

    return recordset;
  }

  async deletePetugas(userId) {
    const recordset = await this.db.query(
      `DELETE FROM petugas WHERE kd_petugas = ` + "'" + userId + "'"
    );
    console.log(recordset);

    return recordset;
  }
  async updatePetugas(data) {
    console.log(data);

    const recordset = await this.db.query(
      `UPDATE petugas SET 
      nm_petugas='` +
        data.nm_petugas +
        `', 
      jabatan='` +
        data.jabatan +
        `',
      tlpn_petugas='` +
        data.tlpn_petugas +
        `',
      email_petugas='` +
        data.email_petugas +
        `',
      ps_petugas='` +
        data.ps_petugas +
        `' WHERE kd_petugas='` +
        data.kd +
        `'`
    );
    console.log(recordset);

    return recordset;
  }
}

module.exports = Query;
