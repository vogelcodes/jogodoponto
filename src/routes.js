const express = require("express");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ texto: "Jogo do Ponto" });
});
routes.post("/sessions", SessionController.store);

module.exports = routes;
