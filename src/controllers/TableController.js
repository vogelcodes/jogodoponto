const Table = require("../models/Table");

module.exports = {
  async store(req, res) {
    const { tableName, size } = req.body;
    const { user_id } = req.headers;

    let table = await Table.findOne({
      user: user_id,
      tableName: tableName
    });
    if (!table) {
      table = await Table.create({
        tableName: tableName,
        size: size,
        gameState: {
          board: "initial"
        },
        user: user_id
      });
    }
    return res.json(table);
  }
};
