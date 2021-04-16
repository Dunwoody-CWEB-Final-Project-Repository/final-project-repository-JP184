const express = require("express");
const router = express.Router();
const { Client } = require('pg');

router.get('/', (req, res) => {
  res.json('This is a json status code for the users api');
})

module.exports = router;