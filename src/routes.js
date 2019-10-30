const express = require("express");
const SessionController = require("./controllers/SessionController");
const TableController = require("./controllers/TableController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ texto: "Jogo do Ponto" });
});
routes.post("/sessions", SessionController.store);
routes.post("/tables", TableController.store);

module.exports = routes;
