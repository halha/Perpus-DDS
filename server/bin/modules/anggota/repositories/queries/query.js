class Query {

  constructor(db){
    this.db = db;
  }

  async getAnggota(parameter) {
    const record = await this.db.query('SELECT * from anggota');
    return record;
  }

  async 
}

module.exports = Query;