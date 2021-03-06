const wrapper = require("../../../helpers/utils/wrapper");
const queryHandler = require("../repositories/queries/query_handler");
const {
  ERROR: httpError,
  SUCCESS: http
} = require("../../../helpers/http-status/status_code");

const addPetugas = async (req, res) => {
  const data = ({} = req.body);
  console.log(data);

  const addPetugas = async () => queryHandler.addData(data);
  const sendResponse = async result => {
    result.err
      ? wrapper.response(
        res,
        "fail",
        result,
        "Get List Petugas",
        httpError.NOT_FOUND
      )
      : wrapper.response(
        res,
        "success",
        result,
        "Your Request Has Been Processed",
        http.OK
      );
  };
  sendResponse(await addPetugas());
};

const getPetugas = async (req, res) => {
  const getData = async () => queryHandler.getData();
  const sendResponse = async result => {
    result.err
      ? wrapper.response(
        res,
        "fail",
        result,
        "Get List Petugas",
        httpError.NOT_FOUND
      )
      : wrapper.response(
        res,
        "success",
        result,
        "Your Request Has Been Processed",
        http.OK
      );
  };
  sendResponse(await getData());
};

const getPetugasId = async (req, res) => {
  const data = req.params.userId;
  const getData = async () => queryHandler.getDatabyId(data);
  const sendResponse = async result => {
    result.err
      ? wrapper.response(
        res,
        "fail",
        result,
        "Get List Petugas",
        httpError.NOT_FOUND
      )
      : wrapper.response(
        res,
        "success",
        result,
        "Your Request Has Been Processed",
        http.OK
      );
  };
  sendResponse(await getData());
};

const deletePetugas = async (req, res) => {
  const body = req.body;
  const deletePetugas = async () => queryHandler.deleteData(body);
  const sendResponse = async result => {
    result.err
      ? wrapper.response(
        res,
        "fail",
        result,
        "Get List Petugas",
        httpError.NOT_FOUND
      )
      : wrapper.response(
        res,
        "success",
        result,
        "Your Request Has Been Processed",
        http.OK
      );
  };
  sendResponse(await deletePetugas());
};

const updatePetugas = async (req, res) => {
  const body = req.body

  const updatePetugas = async () => queryHandler.updateData(body);
  const sendResponse = async result => {
    result.err
      ? wrapper.response(
        res,
        "fail",
        result,
        "Get List Petugas",
        httpError.NOT_FOUND
      )
      : wrapper.response(
        res,
        "success",
        result,
        "Your Request Has Been Processed",
        http.OK
      );
  };
  sendResponse(await updatePetugas());
};

module.exports = {
  getPetugas,
  getPetugasId,
  addPetugas,
  deletePetugas,
  updatePetugas
};
