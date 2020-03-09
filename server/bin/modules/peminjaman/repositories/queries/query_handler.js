const Halo = require("./domain");
const MySql = require("../../../../helpers/databases/mysql/db");
const config = require("../../../../infra/configs/global_config");
const db = new MySql(config.get("/mysqlConfig"));
const halo = new Halo(db);

const getPeminjaman = async () => {
  const Data = async () => {
    const result = await halo.viewPeminjaman();
    return result;
  };
  const result = await Data();
  return result;
};

const getPeminjamanById = async id => {
  const Data = async () => {
    const result = await halo.viewPeminjamanById(id);
    return result;
  };
  const result = await Data();
  return result;
};

const postPeminjaman = async body => {
  const Data = async () => {
    const result = await halo.insertPeminjaman(body);
    return result;
  };
  const result = await Data();
  return result;
};

const deletePeminjaman = async id => {
  const Data = async () => {
    const result = await halo.deletePeminjaman(id);
    return result;
  };
  const result = await Data();
  return result;
};

const updatePeminjaman = async data => {
  const Data = async () => {
    const result = await halo.updatePeminjaman(data);
    return result;
  };
  const result = await Data();
  return result;
};


module.exports = {
  getPeminjaman,
  getPeminjamanById,
  postPeminjaman,
  deletePeminjaman,
  updatePeminjaman
};
