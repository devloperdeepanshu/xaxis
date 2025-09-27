const User = require("../models/User");

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ message: "Invalid username" });

  if (password !== user.password) return res.status(401).json({ message: "Invalid password" });

  res.json({ _id: user._id, username: user.username, role: user.role });
};

const registerUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = new User({ username, password, role });
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { loginUser, registerUser };
