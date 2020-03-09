const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Anggota {

  constructor(db){
    this.query = new Query(db);
  }

  /**
   * @desc GET, POST METHOD
   */

  async viewAnggota() {
    const anggota = await this.query.getAnggota();
    wrapper.data(anggota);

    if (anggota.err) {
      return wrapper.error(new NotFoundError('Data petugas tidak ada'));
    }
    return wrapper.data(anggota);
  }

  async postPeranggotaan(params) {
    const anggota = await this.query.postAnggota(params);
    console.info(anggota);

    if (anggota.err) {
      return wrapper.error(new Error('Tidak bisa masukan data baharu'));
    }
    return wrapper.data(anggota);
  }

}

module.exports = Anggota;