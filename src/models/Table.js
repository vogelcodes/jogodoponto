const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema({
  tableName: String,
  size: Number,
  gameState: {},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Table", TableSchema);
