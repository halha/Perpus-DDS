const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Anggota {

  constructor(db){
    this.query = new Query(db);
  }

  /**
   * @desc GET, POST, UPDATE, VIEW ID, DELETE METHOD
   */

  async viewAnggota() {
    const anggota = await this.query.getAnggota();
    wrapper.data(anggota);

    if (anggota.err) {
      return wrapper.error(new NotFoundError('Data anggota tidak ada'));
    }
    return wrapper.data(anggota);
  }

  async viewAnggotaId(id) {
    const anggota = await this.query.getAnggotaId(id);
    wrapper.data(anggota);

    if (anggota.err) {
      return wrapper.error(new NotFoundError('Data anggota tidak ada'));
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

  async deletePeranggotaan(id) {
    const anggota = await this.query.deleteAnggota(id);
    console.info(anggota);

    if (anggota.err) {
      return wrapper.error(new Error('Tidak bisa hapus data anggota'));
    }
    return wrapper.data(anggota);
  }

  async updatePeranggotaan(data) {
    const anggota = await this.query.updateAnggota(data);
    console.info(anggota);

    if (anggota.err) {
      return wrapper.error(new Error('Tidak bisa apdet data anggota'));
    }
    return wrapper.data(anggota);
  }

}

module.exports = Anggota;