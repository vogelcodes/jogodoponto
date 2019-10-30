const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email, senha } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, senha });
    }

    return res.json(user);
  }
};
