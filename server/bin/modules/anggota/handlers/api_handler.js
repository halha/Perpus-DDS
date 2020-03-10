
const wrapper = require('../../../helpers/utils/wrapper');;
const queryHandler = require('../repositories/queries/query_handler');
const { ERROR:httpError, SUCCESS:http } = require('../../../helpers/http-status/status_code');

/** @desc
 * @anggotaFunctions
 */

const getAnggota = async (req, res) => {
  const getData = async () => queryHandler.getAnggota();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Anggota', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Anggota', http.OK);
  };
  sendResponse(await getData());
};

const getAnggotaId = async (req, res) => {
  const { id } = req.params;
  const getData = async () => queryHandler.getAnggotaId(id);
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Anggota', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Anggota', http.OK);
  };
  sendResponse(await getData());
};

const postAnggota = async (req, res) => {
  const params = req.body;
  const insert = async () => queryHandler.postAnggota(params);
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Anggota', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Anggota', http.OK);
  };
  sendResponse(await insert());
};

const deleteAnggota = async (req, res) => {
  const { id } = req.params;
  const deleteAnggota = async () => queryHandler.deleteAnggota(id);
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Anggota', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Anggota', http.OK);
  };
  sendResponse(await deleteAnggota());
};

const updateAnggota = async (req, res) => {
  const { id } = req.params;
  const data = {} = req.body.data.kd = id;

  const update = async () => queryHandler.updateAnggota(data);
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Anggota', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Anggota', http.OK);
  };
  sendResponse(await update());
};

module.exports = {
  getAnggota,
  postAnggota,
  getAnggotaId,
  deleteAnggota,
  updateAnggota
};