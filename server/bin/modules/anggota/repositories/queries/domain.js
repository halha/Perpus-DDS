const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Anggota {

  constructor(db){
    this.query = new Query(db);
  }

  /**
   * @desc GET METHOD
   */

  async viewAnggota() {
    const anggota = await this.query.getAnggota();
    wrapper.data(anggota);

    if (anggota.err) {
      return wrapper.error(new NotFoundError('Data petugas tidak ada'));
    }
    return wrapper.data(anggota);
  }

  async postPeranggotaan() {
    const anggota = await this.query.postAnggota();
    wrapper.data(anggota);

    if (anggota.err) {
      return wrapper.error(new Error('Tidak bisa masukan data baharu'))
    }
    return wrapper.data(anggota);
  }

}

module.exports = Anggota;