const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ texto: "Jogo do Ponto" });
});

module.exports = routes;
