const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Jogo do ponto");
});
app.listen(3000);
