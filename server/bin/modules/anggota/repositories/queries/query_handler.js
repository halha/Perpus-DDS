
const Anggota = require('./domain');
const Sql = require('../../../../helpers/databases/mysql/db');
const config = require('../../../../infra/configs/global_config');
const db = new Sql(config.get('/mysqlConfig'));
const anggota = new Anggota(db);

const getAnggota = async () => {
  const Anggota = async () => {
    const result = await anggota.viewAnggota();
    return result;
  };
  const result = await Anggota();
  return result;
};

const postAnggota = async () => {
  const Anggota = async () => {
    const result = await anggota.postPeranggotaan();
    return result;
  };
  const result = await Anggota();
  return result;
};

module.exports = { 
  getAnggota,
  postAnggota
};
