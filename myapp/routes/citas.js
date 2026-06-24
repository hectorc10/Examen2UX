var routes = require("express").Router();
var citasController = require("../controllers/citas.js");

routes.get("/citas", citasController.getCitas);
routes.post("/citas", citasController.createCita);

module.exports = routes;