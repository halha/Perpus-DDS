const restify = require("restify");
const corsMiddleware = require("restify-cors-middleware");
const project = require("../../package.json");
const basicAuth = require("../auth/basic_auth_helper");
const jwtAuth = require("../auth/jwt_auth_helper");
const wrapper = require("../helpers/utils/wrapper");

const anggotaHandler = require("../modules/anggota/handlers/api_handler");
const peminjamanHandler = require("../modules/peminjaman/handlers/api_handler");
const petugasHandler = require("../modules/petugas/handlers/api_handler");
const cobaHandler = require("../modules/modulCoba/handlers/api_handler");

function AppServer() {
  this.server = restify.createServer({
    name: `${project.name}-server`,
    version: project.version
  });

  this.server.serverKey = "";
  this.server.use(restify.plugins.acceptParser(this.server.acceptable));
  this.server.use(restify.plugins.queryParser());
  this.server.use(restify.plugins.bodyParser());
  this.server.use(restify.plugins.authorizationParser());

  // required for CORS configuration
  const corsConfig = corsMiddleware({
    preflightMaxAge: 5,
    origins: ["*"],
    // ['*'] -> to expose all header, any type header will be allow to access
    // X-Requested-With,content-type,GET, POST, PUT, PATCH, DELETE, OPTIONS -> header type
    allowHeaders: ["Authorization"],
    exposeHeaders: ["Authorization"]
  });
  this.server.pre(corsConfig.preflight);
  this.server.use(corsConfig.actual);

  // // required for basic auth
  this.server.use(basicAuth.init());

  // anonymous can access the end point, place code bellow
  this.server.get("/", (req, res) => {
    wrapper.response(
      res,
      "success",
      wrapper.data("Index"),
      "This service is running properly"
    );
  });

  // ANGGOTA

  this.server.get(
    "/anggota",
    basicAuth.isAuthenticated,
    anggotaHandler.getAnggota
  );
  this.server.get(
    "/anggota/:userId",
    basicAuth.isAuthenticated,
    anggotaHandler.getAnggota
  );

  // GET modulCOBA
  this.server.get(
    "/api/hello",
    basicAuth.isAuthenticated,
    cobaHandler.getHelloword
  );
  this.server.get(
    "/api/helloid/:id_anggota",
    basicAuth.isAuthenticated,
    cobaHandler.getHellowordId
  );
  this.server.post(
    "/api/hello",
    basicAuth.isAuthenticated,
    cobaHandler.insertHelloword
  );

  // PEMINJAMAN
  this.server.get(
    "/peminjaman",
    basicAuth.isAuthenticated,
    peminjamanHandler.getPeminjaman
  );
  this.server.get(
    "/peminjaman/:id",
    basicAuth.isAuthenticated,
    peminjamanHandler.getPeminjamanById
  );
  this.server.post(
    "/peminjaman",
    basicAuth.isAuthenticated,
    peminjamanHandler.addPeminjaman
  );
  this.server.del('/peminjaman/:id',
    basicAuth.isAuthenticated,
    peminjamanHandler.deletePeminjaman
  );
  this.server.put('/peminjaman/:id',
    basicAuth.isAuthenticated,
    peminjamanHandler.updatePeminjaman
  );

  // PETUGAS
  this.server.get(
    "/petugas",
    basicAuth.isAuthenticated,
    petugasHandler.getPetugas
  );

  this.server.get(
    "/petugas/:userId",
    basicAuth.isAuthenticated,
    petugasHandler.getPetugasId
  );

  this.server.post(
    "/petugas",
    basicAuth.isAuthenticated,
    petugasHandler.addPetugas
  );

  this.server.del(
    "/petugas",
    basicAuth.isAuthenticated,
    petugasHandler.deletePetugas
  );

  this.server.put(
    "/petugas",
    basicAuth.isAuthenticated,
    petugasHandler.updatePetugas
  );
}

module.exports = AppServer;
