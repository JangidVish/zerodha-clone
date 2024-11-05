const User = require("../modal/UserModal");

const userData = async (req, res) => {
  const { uid } = req.body;
  const user = await User.findById(uid);
  if (user) {
    return res.json({ status: true, user: user.username });
  } else {
    return res.json({ status: false });
  }
};

module.exports = userData;
