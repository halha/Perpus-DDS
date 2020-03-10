
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

const getAnggotaId = async (id) => {
  const Anggota = async () => {
    const result = await anggota.viewAnggotaId(id);
    return result;
  };
  const result = await Anggota();
  return result;
};

const postAnggota = async (params) => {
  const Anggota = async () => {
    const result = await anggota.postPeranggotaan(params);
    return result;
  };
  const result = await Anggota();
  return result;
};

const deleteAnggota = async (id) => {
  const Anggota = async () => {
    const result = await anggota.deletePeranggotaan(id);
    return result;
  };
  const result = await Anggota();
  return result;
};

const updateAnggota = async (data) => {
  const Anggota = async () => {
    const result = await anggota.updatePeranggotaan(data);
    return result;
  };
  const result = await Anggota();
  return result;
};

module.exports = { 
  getAnggota,
  postAnggota,
  getAnggotaId,
  deleteAnggota,
  updateAnggota
};
