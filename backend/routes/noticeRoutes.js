const express = require("express");
const router = express.Router();
const { getNotices, addNotice, deleteNotice } = require("../controllers/noticeController");

router.get("/", getNotices);
router.post("/", addNotice);
router.delete("/:id", deleteNotice);

module.exports = router;
