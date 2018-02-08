const express = require('express');
const router = express.Router();
const multer = require('multer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
