var routes = require("express").Router();
var authorsController = require("../controllers/authors.js");

routes.get("/authors", authorsController.getAuthors);
routes.post("/authors",authorsController.createAuthor);

module.exports = routes;

