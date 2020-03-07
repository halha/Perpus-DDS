const wrapper = require("../../../helpers/utils/wrapper");
const queryHandler = require("../repositories/queries/query_handler");
const { ERROR: httpError, SUCCESS: http } = require("../../../helpers/http-status/status_code");

const getPeminjaman = async (req, res) => {
  const getData = async () => queryHandler.getPeminjaman();
  const sendResponse = async result => {
    result.err ? wrapper.response(res,"fail",result,"Get List Project",httpError.NOT_FOUND)
      : wrapper.response(res,"success",result,"Your Request Has Been Processed", http.OK);};
  sendResponse(await getData());
};

const getPeminjamanById = async (req, res) => {
  const { id } = req.params;
  const Data= async () => queryHandler.getPeminjamanById(id);
  const sendResponse = async result => {
    result.err ? wrapper.response(res,"fail",result,"Get List Project",httpError.NOT_FOUND)
    : wrapper.response(res,"success",result,"Your Request Has Been Processed", http.OK);};
  sendResponse(await Data());
};

const addPeminjaman = async (req, res) => {
  const parameter = req.body;
  const insertData = async () => queryHandler.postPeminjaman(parameter);
  const sendResponse = async result => {
    result.err ? wrapper.response(res,"fail",result,"Get List Project",httpError.NOT_FOUND)
    : wrapper.response(res,"success",result,"Your Request Has Been Processed", http.OK);};
  sendResponse(await insertData());
};

module.exports = {
  getPeminjaman,
  getPeminjamanById,
  addPeminjaman
};
