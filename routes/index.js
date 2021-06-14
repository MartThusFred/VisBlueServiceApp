const { json } = require('express');
var express = require('express');
var router = express.Router();
const sql = require("../dboperation");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//test connection
router.get('/testconnect', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});


router.get("/data_update", function (req, res, next) {
  sql.getdata_withQuery().then((result) => {
    res.json(result[0]);
  });
});

router.get("/devices", function (req, res, next) {
  sql.getDeviceList_withQuery().then((result) => {
    res.json(result[0]);
  });
});


module.exports = router;
