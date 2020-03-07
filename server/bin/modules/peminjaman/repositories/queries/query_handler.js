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

const getPeminjamanById = async parameter => {
  const Data = async () => {
    const result = await halo.viewPeminjamanById(parameter);
    return result;
  };
  const result = await Data();
  return result;
};

const postPeminjaman = async parameter => {
  const Data = async () => {
    const result = await halo.insertPeminjaman(parameter);
    return result;
  };
  const result = await Data();
  return result;
};

module.exports = {
  getPeminjaman,
  getPeminjamanById,
  postPeminjaman
};
