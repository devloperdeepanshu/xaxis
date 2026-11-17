const Notice = require("../models/Notice");

const getNotices = async (req, res) => {
  const notices = await Notice.find();
  res.json(notices);
};

const addNotice = async (req, res) => {
  try {
    // Assume you send role from frontend (not secure but ok for now)
    if (req.body.role !== "admin") {
      return res.status(403).json({ message: "Only admin can add notice" });
    }

    const notice = new Notice({
      title: req.body.title,
      content: req.body.content,
    });

    await notice.save();

    res.json(notice);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteNotice = async (req, res) => {
  try {
    if (req.body.role !== "admin") {
      return res.status(403).json({ message: "Only admin can delete" });
    }

    await Notice.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getNotices, addNotice, deleteNotice };
