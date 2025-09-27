const Notice = require("../models/Notice");

const getNotices = async (req, res) => {
  const notices = await Notice.find();
  res.json(notices);
};

const addNotice = async (req, res) => {
  const notice = new Notice(req.body);
  await notice.save();
  res.json(notice);
};

const deleteNotice = async (req, res) => {
  await Notice.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

module.exports = { getNotices, addNotice, deleteNotice };
