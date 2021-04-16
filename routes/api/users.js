const express = require("express");
const router = express.Router();
const { Client } = require('pg');

router.get('/user', function (req, res) {
  res.json('This is a json status code.');
})

module.exports = router;