const userVerification = (req, res) => {
  const token = req.cookies.token; // Assuming you're using cookie-parser
  if (!token) {
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({
        status: false,
        message: `Error in verifying token ${err}`,
      });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        return res.json({ status: true, user: user.username });
      } else {
        return res.json({ status: false });
      }
    }
  });
};

module.exports = userVerification;
