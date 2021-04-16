const express = require("express");
const router = express.Router();
//TODO:: add in error and info.

router.use("/api", require("./users"));

module.exports = router;