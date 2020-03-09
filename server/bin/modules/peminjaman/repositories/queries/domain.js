const Query = require("./query");
//const queryModel = require('./query_model');
const wrapper = require("../../../../helpers/utils/wrapper");
const { NotFoundError } = require("../../../../helpers/error");

class Halo {
  constructor(db) {
    this.query = new Query(db);
  }

  async viewPeminjaman() {
    const user = await this.query.getPeminjaman();
    // console.log(user);
    if (user.err) {
      return wrapper.error(new NotFoundError("Can not find list project"));
    }
    return wrapper.data(user);
  }

  async viewPeminjamanById(parameter) {
    const user = await this.query.getPeminjamanById(parameter);
    // console.log(user)
    if (user.err) {
      return wrapper.error(new NotFoundError("Can not find list project"));
    }
    return wrapper.data(user);
  }

  async insertPeminjaman(parameter) {
    const user = await this.query.postPeminjaman(parameter);
    console.log(user);
    if (user.err) {
      return wrapper.error(new NotFoundError("Can not find list project"));
    }
    return wrapper.data(user);
  }
}

module.exports = Halo;
