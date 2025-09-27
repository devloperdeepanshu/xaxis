const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addTeacher, getTeachers } = require("../controllers/teacherController");

const upload = multer({ dest: "uploads/" }); // temporary local storage

router.get("/", getTeachers);
router.post("/", upload.single("photo"), addTeacher);

module.exports = router;
